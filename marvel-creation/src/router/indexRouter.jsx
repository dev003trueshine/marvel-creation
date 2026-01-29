import MainLayout from "@/layout/main"
export const IndexRouter = [
    {
        path: '/',
        element: <MainLayout />, // <--- This calls Header & Footer ONCE

    }
]