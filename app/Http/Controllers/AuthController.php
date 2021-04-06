<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>$request->password,
            'surname'=>$request->surname,
            'address'=>$request->address,
            'city'=>$request->city,
            'zip_code'=>$request->zip_code,
            'phone'=>$request->phone,
            'country'=>$request->country,
            'money'=>'',
            'token'=>'',
            'wishlist'=>'',

        ]);
        return response('Successful', 204);
    }
    public function login(LoginRequest $request)
    {
        $user = User::where(['email' => $request->email])->first();

        if (!$user || !($request->password == $user->password)) {
            return response()->json([
                'error' => [
                    'code' => 401,
                    'message' => 'Unauthorized',
                    'errors' => ['email or password incorrect']
                ]
            ])->setStatusCode(401);
        }

        $token = Str::random(128);
        $user->token = $token;
        $user->save();

        return response()->json([
            'data' => [
                'token' => $token
            ]
        ])->setStatusCode(200);
    }

    public function user(Request $request)
    {
        $user = User::where(['token'=>$request->bearerToken()])->first();

        return new UserResource($user);
    }

}
