<?php

namespace App\Http\Requests\User;

use App\Helpers\ApiResponse;
use Illuminate\Http\Response;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class UpdateUserRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'email' => 'required|string|email|max:255|unique:users,email,' . $this->user,
            'username' => 'required|string|max:255|unique:users,username,' . $this->user,
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'mobile' => 'required|string|max:255',
            'date_of_birth' => 'required|date_format:Y-m-d',
            'password' => 'required|string'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            ApiResponse::error('Validation errors', Response::HTTP_UNPROCESSABLE_ENTITY, $validator->errors())
        );
    }
}
