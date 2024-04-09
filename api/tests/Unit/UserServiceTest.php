<?php

namespace Tests\Unit;

use Mockery;
use Tests\TestCase;
use App\Models\User;
use App\Services\UserService;
use App\Repositories\Contracts\UserRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class UserServiceTest extends TestCase
{
    protected $userRepository;
    protected $userService;

    protected function setUp(): void
    {
        parent::setUp();
        $this->userRepository = Mockery::mock(UserRepositoryInterface::class);
        $this->userService = new UserService($this->userRepository);
    }

    protected function tearDown(): void
    {
        Mockery::close();
        parent::tearDown();
    }

    /** @test */
    public function it_can_list_users()
    {
        $items = collect([new User(['id' => 1]), new User(['id' => 2])]);
        $perPage = 15;
        $currentPage = 1;
        $total = 2;
        $paginator = new \Illuminate\Pagination\LengthAwarePaginator($items, $total, $perPage, $currentPage);

        $this->userRepository->shouldReceive('getAll')
            ->once()
            ->andReturn($paginator);

        $users = $this->userService->getAll([]);

        $this->assertInstanceOf(LengthAwarePaginator::class, $users);
    }

    /** @test */
    public function it_can_get_a_single_user()
    {
        $user = new User(['id' => 1, 'email' => 'test@example.com', 'username' => 'testuser']);

        $this->userRepository->shouldReceive('getOne')
            ->with(1)
            ->andReturn($user);

        $result = $this->userService->getOne(1);

        $this->assertInstanceOf(User::class, $result);
        $this->assertEquals('testuser', $result->username);
    }

    /** @test */
    public function it_can_create_a_user()
    {
        $userData = [
            'email' => 'test@example.com',
            'username' => 'testuser',
            'first_name' => 'test',
            'last_name' => 'example',
            'mobile' => '5521988998989',
            'date_of_birth' => '2001-01-01',
            'password' => 'test',
        ];

        $mockUser = Mockery::mock(User::class);
        $mockUser->shouldReceive('getAttribute')->with('id')->andReturn(1);
        $mockUser->shouldReceive('setAttribute')->andReturnSelf();

        $this->userRepository->shouldReceive('store')
            ->once()
            ->with(Mockery::on(function ($arg) use ($userData) {
                return true;
            }))
            ->andReturn($mockUser);

        $result = $this->userService->create($userData);

        $this->assertInstanceOf(User::class, $result);
        $this->assertEquals(1, $result->id);
    }

    /** @test */
    public function it_can_update_a_user()
    {
        $userId = 1;
        $userData = [
            'email' => 'test@example.com',
            'username' => 'testuser',
            'first_name' => 'test',
            'last_name' => 'example',
            'mobile' => '5521988998989',
            'date_of_birth' => '2001-01-01',
            'password' => 'newPassword',
        ];

        $mockUser = Mockery::mock(User::class);
        $mockUser->shouldReceive('getAttribute')->with('id')->andReturn($userId);
        $mockUser->shouldReceive('setAttribute')->andReturnSelf();

        $this->userRepository->shouldReceive('update')
            ->once()
            ->withArgs(function ($id, $data) {
                return $id === 1;
            })
            ->andReturn($mockUser);

        $result = $this->userService->update($userId, $userData);

        $this->assertInstanceOf(User::class, $result);
        $this->assertEquals($userId, $result->id);
    }

    /** @test */
    public function it_can_delete_a_user()
    {
        $userId = 1;

        $this->userRepository->shouldReceive('delete')
            ->once()
            ->with($userId)
            ->andReturn(true);

        $result = $this->userService->delete($userId);

        $this->assertTrue($result);
    }
}
