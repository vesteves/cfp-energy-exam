<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

use App\Helpers\ApiResponse;
use App\Services\UserService;
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
     * Create a new user.
     *
     * @param StoreUserRequest $request
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
            $user = $this->userService->createUser($request->validated());

            return ApiResponse::success($user, Response::HTTP_CREATED);
        } catch (\Exception $exception) {
            Log::error('User creation failed: ' . $exception->getMessage(), $request->validated());

            return ApiResponse::error('An unexpected error occurred.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
