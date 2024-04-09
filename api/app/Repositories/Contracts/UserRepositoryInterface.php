<?php

namespace App\Repositories\Contracts;

use App\Models\User;

interface UserRepositoryInterface
{
    /**
     * Store a new user.
     * 
     * @param array $params Details of the new user.
     * @param string $params['email'] Email address of the user.
     * @param string $params['username'] Username for the user.
     * @param string $params['first_name'] First name of the user.
     * @param string $params['last_name'] Last name of the user.
     * @param string $params['mobile'] Mobile number of the user.
     * @param string $params['date_of_birth'] Date of birth of the user (YYYY-MM-DD).
     * @param string $params['password'] Password for the user account.
     * 
     * @return User The newly created user model.
     */
    public function store(array $params): User;
}
