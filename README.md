# Into the Valley

[Into the Valley Website](https://into-the-valley-website.vercel.app/) is a Next.js application designed for customers of a rental resort business to browse available cabins, make and manage reservations, and manage guest profiles. Customers can sign up with their Google account to create their own profile and manage their reservations.

This application is the client-facing website, I have also developed the [business-side application](https://into-the-valley-business.vercel.app/) for this business. [[GitHub].](https://github.com/W-Tania/into-the-valley-business) Both the business app and the client-facing app communicate with the back-end database using RESTful APIs, allowing data about bookings, cabins, and guests to be shared between the apps.

## Features:
* **Authentication**: Authorization is implemented with the Next-Auth library, connected to Google auth provider. Routes are protected with middleware.
* **Guest Profile**: Unique guest profiles are created with each Google account, and signed-in users can update guest-related information and manage reservations.
* **Booking Management**: Each guest can create, update, and delete bookings under their name.
* **Cabins**: Users can see a list of cabins with filters to narrow their choices. Each cabin also has a details page to show more information and a calendar to show available dates.
* **Responsive design**: Ensure compatibility across devices.
* **Real-Time Booking Validation**: Prevent doublebooking and check for available time slots while making bookings.
* **Dynamic Metadata**: Different title displayed on different pages.

## Technology:
Into the Valley is built using Next.js and Supabase as the backend, providing an interactive and responsive web application for customers to browse and book cabins.

* **RESTful APIs**: API seamlessly integrated to manager server state and global state.
* **Supabase**: A open-source Firebase alternative database that utilizes the Postgres architecture.
* **Tailwind CSS**: A utility-first CSS framework that enables fast and efficient styling, ensuring a responsive design.
* **Next Auth**: An open-source authentication solution that supports serverless Next.js applications, providing secure and easy-to-implement authentication with providers like Google.
* **HeroIcons**: An icon library designed for Tailwind CSS, offering a wide range of easily customizable icons.
* **React day picker**: A calendar library used to select dates when making reservations, enhancing the user experience with an intuitive date-picking interface.

## Preview - Desktop:
<img width="1440" alt="Screenshot 2024-07-19 at 11 52 34 am" src="https://github.com/user-attachments/assets/4d630749-ee06-42db-9670-3fc1b8b092ea">
<img width="1440" alt="Screenshot 2024-07-19 at 11 52 47 am" src="https://github.com/user-attachments/assets/9b6149a8-d6a0-4c33-add3-bf09da852cbc">
<img width="1440" alt="Screenshot 2024-07-19 at 11 53 22 am" src="https://github.com/user-attachments/assets/ccbb28a9-d2b4-484e-a803-74a319cd95c5">
<img width="1440" alt="Screenshot 2024-07-19 at 11 53 37 am" src="https://github.com/user-attachments/assets/2f4bc23a-f771-45e1-add8-f54e26b9923e">
<img width="1440" alt="Screenshot 2024-07-19 at 11 54 23 am" src="https://github.com/user-attachments/assets/6f77213d-1471-4a1e-8bb7-0cb5c0cdd74e">
<img width="1440" alt="Screenshot 2024-07-19 at 11 54 39 am" src="https://github.com/user-attachments/assets/4a31598a-9f47-4ca1-af1a-52e8d4560bb8">


## Preview - Phone:
<img width="293" alt="Screenshot 2024-07-19 at 12 06 13 pm" src="https://github.com/user-attachments/assets/af8fba98-d1d3-4645-a459-a5555851bdd0">
<img width="292" alt="Screenshot 2024-07-19 at 12 06 48 pm" src="https://github.com/user-attachments/assets/33340dd7-8c2d-4647-9421-44be9c548dba">
