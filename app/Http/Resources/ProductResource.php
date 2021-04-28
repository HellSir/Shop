<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'price'=>$this->price,
            'old_price'=>$this->old_price,
            'color'=>$this->color,
            'quantity'=>$this->quantity,
            'stars'=>$this->stars,
            'category'=>$this->category,
            'description'=>$this->description,
            'details'=>$this->details,
            'sales'=>$this->sales,
            'reviews'=>$this->reviews,
        ];

    }
}
