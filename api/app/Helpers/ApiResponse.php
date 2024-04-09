<?php

namespace App\Helpers;

use Illuminate\Http\Response;

class ApiResponse
{
    public static function success($data, $statusCode = Response::HTTP_OK)
    {
        return response()->json([
            'success' => true,
            'data' => $data
        ], $statusCode);
    }

    public static function error($message, $statusCode = Response::HTTP_BAD_REQUEST, $errorDetails = [])
    {
        return response()->json([
            'success' => false,
            'error' => [
                'message' => $message,
                'details' => $errorDetails
            ]
        ], $statusCode);
    }
}
