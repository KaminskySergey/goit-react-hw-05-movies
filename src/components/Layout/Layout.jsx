import Box from "Box/Box";
import Header from "components/Header/Header";




const Layout = ({children}) => {
    return (
        <>
        <Header/>
        
        
        <main>
            
                <Box pt={96} pb={30} height='100vh'>
                    
                {children}
                </Box>

            
        </main>
        </>
            
        
        
        
    )
}

export default Layout;