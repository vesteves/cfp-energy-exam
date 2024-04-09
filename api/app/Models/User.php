<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'email',
        'username',
        'first_name',
        'last_name',
        'mobile',
        'date_of_birth',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'date_of_birth' => 'date',
    ];

    /**
     * The attributes that should be append.
     *
     * @var array<string, string>
     */
    protected $appends = [
        'full_name'
    ];

    /**
     * Append full_name to the User model.
     * 
     * @return string
     */
    public function getFullNameAttribute(): string
    {
        return ucfirst($this->first_name) . " " . ucfirst($this->last_name);
    }

    /**
     * Apply a query scope to filter users by email containing a specific string.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query Builder object of Eloquent.
     * @param string|null $email E-mail part to be search.
     * 
     * @return \Illuminate\Database\Eloquent\Builder $query Builder with applied scope.
     */
    public function scopeEmailContains(Builder $query, $email)
    {
        if ($email) {
            $query->where('email', 'like', '%' . $email . '%');
        }
    }

    /**
     * Apply a query scope to filter users by username containing a specific string.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query Builder object of Eloquent.
     * @param string|null $username Username part to be search.
     * 
     * @return \Illuminate\Database\Eloquent\Builder $query Builder with applied scope.
     */
    public function scopeUsernameContains(Builder $query, $username)
    {
        if ($username) {
            $query->where('username', 'like', '%' . $username . '%');
        }
    }

    /**
     * Apply a query scope to filter users by firstName containing a specific string.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query Builder object of Eloquent.
     * @param string|null $firstName first_name part to be search.
     * 
     * @return \Illuminate\Database\Eloquent\Builder $query Builder with applied scope.
     */
    public function scopeFirstNameContains(Builder $query, $firstName)
    {
        if ($firstName) {
            $query->where('first_name', 'like', '%' . $firstName . '%');
        }
    }

    /**
     * Apply a query scope to filter users by lastName containing a specific string.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query Builder object of Eloquent.
     * @param string|null $lastName last_name part to be search.
     * 
     * @return \Illuminate\Database\Eloquent\Builder $query Builder with applied scope.
     */
    public function scopeLastNameContains(Builder $query, $lastName)
    {
        if ($lastName) {
            $query->where('last_name', 'like', '%' . $lastName . '%');
        }
    }

    /**
     * Apply a query scope to filter users by mobile containing a specific string.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query Builder object of Eloquent.
     * @param string|null $mobile Mobile part to be search.
     * 
     * @return \Illuminate\Database\Eloquent\Builder $query Builder with applied scope.
     */
    public function scopeMobileContains(Builder $query, $mobile)
    {
        if ($mobile) {
            $query->where('mobile', 'like', '%' . $mobile . '%');
        }
    }

    /**
     * Apply a query scope to filter users by date of birth greater than a specific date.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query Builder object of Eloquent.
     * @param string|null $date Date of Birth do be filtered greater than a specific date.
     * 
     * @return \Illuminate\Database\Eloquent\Builder $query Builder with applied scope.
     */
    public function scopeDateOfBirthGreaterThan(Builder $query, $date)
    {
        if ($date) {
            $query->where('date_of_birth', '>', $date);
        }
    }

    /**
     * Apply a query scope to filter users by date of birth less than a specific date.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query Builder object of Eloquent.
     * @param string|null $date Date of Birth do be filtered less than a specific date.
     * 
     * @return \Illuminate\Database\Eloquent\Builder $query Builder with applied scope.
     */
    public function scopeDateOfBirthLessThan(Builder $query, $date)
    {
        if ($date) {
            $query->where('date_of_birth', '<', $date);
        }
    }

    /**
     * Apply a query scope to filter users by created at field greater than a specific date.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query Builder object of Eloquent.
     * @param string|null $date Created At field do be filtered greater than a specific date.
     * 
     * @return \Illuminate\Database\Eloquent\Builder $query Builder with applied scope.
     */
    public function scopeCreatedAtGreaterThan(Builder $query, $date)
    {
        if ($date) {
            $query->where('created_at', '>', $date);
        }
    }

    /**
     * Apply a query scope to filter users by created at field less than a specific date.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query Builder object of Eloquent.
     * @param string|null $date Created At field do be filtered less than a specific date.
     * 
     * @return \Illuminate\Database\Eloquent\Builder $query Builder with applied scope.
     */
    public function scopeCreatedAtLessThan(Builder $query, $date)
    {
        if ($date) {
            $query->where('created_at', '<', $date);
        }
    }
}
