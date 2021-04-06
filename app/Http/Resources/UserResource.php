<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'name'=>$this->name,
            'email'=>$this->email,
            'password'=>$this->password,
            'surname'=>$this->surname,
            'address'=>$this->address,
            'city'=>$this->city,
            'zip_code'=>$this->zip_code,
            'phone'=>$this->phone,
            'country'=>$this->country,
            'money'=>$this->money,
            'token'=>$this->token,
            'wishlist'=>$this->wishlist,
        ];
    }
}
