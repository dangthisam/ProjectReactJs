
import Header from "../Header";
import { TabContext } from "../context/TabContext"

 export function Layout() {

    const content=[
        "trang chu",
        "tab 1",
        "tab 2"
    ]
    return (
        <>
        <TabContext.Provider value={content}>
            <Header />
            <main>
                <h2>Main Content</h2>
            </main>
        </TabContext.Provider>
        </>
    );
}

export default Layout;