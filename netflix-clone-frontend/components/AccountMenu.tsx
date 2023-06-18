import { signOut } from "next-auth/react";
import useCurrentUser from "../hooks/useCurrentUser";

interface AccountMenuProps {
    visible?: boolean
}

const AccountMenu: React.FC<AccountMenuProps> = ({visible}) => {

    if(!visible) return null

    const {data: user} = useCurrentUser()

    return ( 
        <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="fkex flex-col gap-3">
                <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
                    <img className="w-8 rounded-md" src="/images/default-blue.png" alt="" />
                    <p className="text-white text-sm group-hover/item:underline font-bold">
                        {user?.name || user?.email}
                    </p>
                </div>
                <hr className="bg-gray-600 border-0 h-px my-4" />
                <div onClick={() => signOut()} className="px-3 font-bold text-center text-white text-sm hover:underline">
                    Sign out
                </div>
            </div>
        </div>
     );
}
 
export default AccountMenu;