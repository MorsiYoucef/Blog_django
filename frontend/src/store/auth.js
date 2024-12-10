// Import the 'create' function from the 'zustand' library, is the function from Zustand to make a "store" (a container for state and logic).
import { create } from 'zustand';

// Import the 'mountStoreDevtool' function from the 'simple-zustand-devtools' library, helps debug your Zustand store in development mode (like seeing and testing changes in your state while working on the app).
import { mountStoreDevtool } from 'simple-zustand-devtools';

// Create a custom Zustand store named 'useAuthStore' using the 'create' function.
const useAuthStore = create((set, get) => ({
  // Define the 'allUserData' state variable and initialize it to null.
  allUserData: null, // Use this to store all user data,A state variable to store all the user's information. It starts as null (no user logged in).

  // Define the 'loading' state variable and initialize it to false.
  loading: false, //A state variable to indicate if something (like a login process) is still loading. It starts as false (not loading).

  // Define a function 'user' that returns an object with user-related data.
  user: () => ({
    // A function that gives you specific user information, like user_id and username.
    // It checks if allUserData has these details and returns them. If not, it returns null.
    user_id: get().allUserData?.user_id || null,
    username: get().allUserData?.username || null,
  }),

  // Define a function 'setUser' that allows setting the 'allUserData' state.
  setUser: (user) => set({ allUserData: user }), //A function to update the allUserData variable when new user data is available.

  // Define a function 'setLoading' that allows setting the 'loading' state.
  setLoading: (loading) => set({ loading }), // A function to update the loading variable.

  // Define a function 'isLoggedIn' that checks if 'allUserData' is not null.
  isLoggedIn: () => get().allUserData !== null, //A function to check if a user is logged in (i.e., if allUserData is not null).
}))

// Conditionally attach the DevTools only in a development environment.
if (import.meta.env.DEV) {
    mountStoreDevtool('Store', useAuthStore);
}

// Export the 'useAuthStore' for use in other parts of the application.
export { useAuthStore };
