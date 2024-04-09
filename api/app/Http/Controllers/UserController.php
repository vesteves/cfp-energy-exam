<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

use App\Helpers\ApiResponse;
use App\Services\UserService;
use App\Http\Requests\User\ListUserRequest;
use App\Http\Requests\User\StoreUserRequest;

class UserController extends Controller
{
    protected $userService;

    /**
     * Create a new UserController instance.
     *
     * @param UserService $userService
     */
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * List all users with pagination.
     * 
     * @param ListUserRequest @request
     *
     * @return \Illuminate\Http\JsonResponse
     *
     * @SWG\Get(
     *     path="/users",
     *     summary="List all users",
     *     @SWG\Response(
     *         response=200,
     *         description="Successful operation",
     *     ),
     *     @SWG\Response(
     *         response=500,
     *         description="Server error"
     *     )
     * )
     */
    public function index(ListUserRequest $request)
    {
        try {
            $filters = $request->only(['email', 'username', 'first_name', 'last_name', 'mobile', 'date_of_birth_greater', 'date_of_birth_less', 'created_at_greater', 'created_at_less']);

            $users = $this->userService->getAll($filters);

            return ApiResponse::success($users);
        } catch (\Exception $exception) {
            Log::error('Failed to retrieve users: ' . $exception->getMessage());

            return ApiResponse::error('An unexpected error occurred.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    /**
     * Create a new user.
     *
     * @param StoreUserRequest $request
     * 
     * @return \Illuminate\Http\JsonResponse
     *
     * @SWG\Post(
     *     path="/users",
     *     summary="Create a new user",
     *     @SWG\Parameter(
     *         name="body",
     *         in="body",
     *         required=true,
     *     ),
     *     @SWG\Response(
     *         response=200,
     *         description="User created successfully",
     *     ),
     *     @SWG\Response(
     *         response=400,
     *         description="Bad request"
     *     ),
     *     @SWG\Response(
     *         response=500,
     *         description="Server error"
     *     )
     * )
     */
    public function store(StoreUserRequest $request)
    {
        try {
            $user = $this->userService->create($request->validated());

            return ApiResponse::success($user, Response::HTTP_CREATED);
        } catch (\Exception $exception) {
            Log::error('User creation failed: ' . $exception->getMessage(), $request->validated());

            return ApiResponse::error('An unexpected error occurred.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
