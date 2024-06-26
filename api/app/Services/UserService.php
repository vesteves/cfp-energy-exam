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

    /**
     * Delete an user by id.
     * 
     * @param int $id.
     * 
     * @return bool
     */
    public function delete(int $id): bool
    {
        return $this->userRepository->delete($id);
    }

    /**
     * Update an existing user.
     * 
     * @param int $id User id to be updated.
     * @param array $data Data for updating the user.
     * @param string $data['email'] (optional) New email of the user.
     * @param string $data['username'] (optional) New username for the user.
     * @param string $data['first_name'] (optional) New first name of the user.
     * @param string $data['last_name'] (optional) New last name of the user.
     * @param string $data['mobile'] (optional) New mobile number of the user.
     * @param string $data['date_of_birth'] (optional) New date of birth (YYYY-MM-DD).
     * @param string $data['password'] (optional) New password for the user.
     * 
     * @return User The updated user model.
     */
    public function update(int $id, array $data): User
    {
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        return $this->userRepository->update($id, $data);
    }
}
