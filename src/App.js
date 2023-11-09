import {createHashRouter, redirect, RouterProvider} from "react-router-dom";
import Level from "./components/Level";
import config from "./config.json";

export default function Game() {
    const router = createHashRouter([
        {
            path: "/",
            loader: () => {
                const currentLevel = window.localStorage.getItem('currentLevel') || 0;
                return redirect(`/level/${currentLevel}`);
            },
        },
        {
            path: "/level/:levelId",
            element: <Level/>,
            loader: ({ params }) => {
                window.localStorage.setItem("currentLevel", params.levelId || 0);
                return config[params.levelId] || config[0];
            },
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}