<?php

namespace App\Repositories\Contracts;

use App\Models\User;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;

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

    /**
     * List users with pagination.
     * 
     * @param array $filters Filters of data to be filtered.
     * @param string $filters['email'] Email address like.
     * @param string $filters['username'] Username like.
     * @param string $filters['first_name'] First name like.
     * @param string $filters['last_name'] Last name like.
     * @param string $filters['mobile'] Mobile number like.
     * @param string $filters['date_of_birth_greater'] Date of birth (YYYY-MM-DD) greater than.
     * @param string $filters['date_of_birth_less'] Date of birth (YYYY-MM-DD) less than.
     * @param string $filters['created_at_greater'] Created at greater than.
     * @param string $filters['created_at_less'] Created at less than.
     * 
     * @return LengthAwarePaginator A paginator instance containing User models.
     */
    public function getAll(array $filters): LengthAwarePaginator;
}
