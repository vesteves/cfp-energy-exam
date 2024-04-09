<?php

namespace App\Services;

use App\Models\User;

use App\Repositories\Contracts\UserRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class UserService
{
    protected $userRepository;

    /**
     * Create a new UserService instance.
     *
     * @param UserRepositoryInterface $userRepository
     */
    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * List users with pagination.
     * 
     * @param array $filters Filters.
     * @param string $filters['email'] Email address like.
     * @param string $filters['username'] Username like.
     * @param string $filters['first_name'] First name like.
     * @param string $filters['last_name'] Last name like.
     * @param string $filters['mobile'] Mobile number like.
     * @param string $filters['date_of_birth_greater'] Date of birth (YYYY-MM-DD) greater than.
     * @param string $filters['date_of_birth_less'] Date of birth (YYYY-MM-DD) less than.
     * @param string $filters['created_at_greater'] Created at greater than.
     * @param string $filters['created_at_less'] Created at less than.
     * @param string $filters['password'] Password for the user account.
     * 
     * @return LengthAwarePaginator A paginator instance containing User models.
     */
    public function getAll($filters): LengthAwarePaginator
    {
        return $this->userRepository->getAll($filters);
    }

    /**
     * Get an user by id.
     * 
     * @param int $id.
     * 
     * @return User | null User model or null.
     */
    public function getOne(int $id): User | null
    {
        return $this->userRepository->getOne($id);
    }

    /**
     * Create a new user.
     * 
     * @param array $data User data.
     * @param string $data['email'] Email address of the user.
     * @param string $data['username'] Username for the user.
     * @param string $data['first_name'] First name of the user.
     * @param string $data['last_name'] Last name of the user.
     * @param string $data['mobile'] Mobile number of the user.
     * @param string $data['date_of_birth'] Date of birth of the user (YYYY-MM-DD).
     * @param string $data['password'] Password for the user account.
     * 
     * @return User The newly created user model.
     */
    public function create(array $data): User
    {
        return $this->userRepository->store($data);
    }
}
