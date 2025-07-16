
const Footer = () => {
  return (
    <section className="footer h-[200px] w-full border-t border-neutral-300 p-4">
        <div className="footer-content flex justify-between items-center h-full">
            <div className="footer-left">
                <h1>INCODE LOGO</h1>
                <p className="text-sm text-neutral-500">© 2025 Incode AI. All rights reserved.</p>
            </div>
            <div className="footer-right w-1/2 grid grid-cols-2 gap-4 place-content-center place-items-center">
                <div className="grid-1 ">
                    <ul className="flex flex-col gap-2">
                        <li className="text-sm text-neutral-500">Terms of Service</li>
                        <li className="text-sm text-neutral-500">Contact Us</li>
                        <li className="text-sm text-neutral-500">About Us</li>
                    </ul>
                </div>
                <div className="grid-2 ">
                    <ul className="flex flex-col gap-2 justify-center items-center">
                        <li className="text-sm text-neutral-500">Terms of Service</li>
                        <li className="text-sm text-neutral-500">Contact Us</li>
                        <li className="text-sm text-neutral-500">About Us</li>
                        </ul>
                        </div>   
            </div>
        </div>
    </section>
  )
}

export default Footer
