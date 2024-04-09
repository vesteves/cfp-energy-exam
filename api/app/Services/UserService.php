<?php

namespace App\Services;

use App\Repositories\Contracts\UserRepositoryInterface;
use App\Models\User;

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
    public function createUser(array $data): User
    {
        return $this->userRepository->store($data);
    }
}
