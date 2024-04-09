<?php

namespace App\Repositories\Eloquent;

use App\Models\User;

use App\Repositories\Contracts\UserRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class UserRepository implements UserRepositoryInterface
{
    /**
     * {@inheritdoc}
     */
    public function store(array $params): User
    {
        return User::create($params);
    }

    /**
     * {@inheritdoc}
     */
    public function getAll(array $filters): LengthAwarePaginator
    {
        $query = User::query();

        $query->emailContains($filters['email'] ?? null)
            ->usernameContains($filters['username'] ?? null)
            ->firstNameContains($filters['first_name'] ?? null)
            ->lastNameContains($filters['last_name'] ?? null)
            ->mobileContains($filters['mobile'] ?? null)
            ->dateOfBirthGreaterThan($filters['date_of_birth_greater'] ?? null)
            ->dateOfBirthLessThan($filters['date_of_birth_less'] ?? null)
            ->createdAtGreaterThan($filters['created_at_greater'] ?? null)
            ->createdAtLessThan($filters['created_at_less'] ?? null);

        return $query->paginate();
    }

    /**
     * {@inheritdoc}
     */
    public function getOne(int $id): User | null
    {
        return User::find($id);
    }
}
