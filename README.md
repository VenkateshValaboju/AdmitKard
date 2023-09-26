# Express OTP Verification API

This is a simple Express.js API for generating and verifying OTPs (One-Time Passwords) for mobile number verification. It provides two endpoints: one for generating OTPs and another for verifying them.

## Prerequisites

Before running this API, make sure you have the following installed:

## Installation

1. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the Express server:

   ```bash
   node app.js
   ```

   The server will run on `http://localhost:3001`.

2. Generate OTP for a Mobile Number:

   - **Endpoint**: `POST /get-otp`
   - **Request Body**:

     ```json
     {
       "mobileNumber": "<mobile-number>"
     }
     ```

     Replace `<mobile-number>` with the desired mobile number for which you want to generate an OTP.

   - **Response**: The API will generate a random OTP and return it as a response.

3. Verify OTP:

   - **Endpoint**: `POST /verify-otp`
   - **Request Body**:

     ```json
     {
       "enteredOTP": "<otp-to-verify>"
     }
     ```

     Replace `<otp-to-verify>` with the OTP you want to verify.

   - **Response**: If the provided OTP matches the previously generated OTP, the API will respond with "Verified." If the OTP is incorrect, it will respond with a 400 status and "Incorrect."
