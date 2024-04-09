<?php

namespace App\Http\Requests\User;

use App\Helpers\ApiResponse;
use Illuminate\Http\Response;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|email|unique:users,email',
            'username' => 'required|string|unique:users,username',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'mobile' => 'required|string',
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
