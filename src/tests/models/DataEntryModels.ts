export interface UserInfo {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

export interface ShippingAddress {
    country: string;
    city: string;
    address_1: string;
    zip_postal_code: string;
    phone_number: string;
}

export interface PaymentMethod {
    type: string;
    card_type: string;
    cardholder_name: string;
    card_number: string;
    expiration_month: string;
    expiration_year: string;
    card_code: string;
}

export interface OrderConfirmation {
    msg_registration: string;
    msg_add_cart: string;
    msg_order_ok: string;   
}

export interface OrderData {
    user_info: UserInfo;
    shipping_address: ShippingAddress;
    payment_method: PaymentMethod;
    order_confirmation: OrderConfirmation;
}