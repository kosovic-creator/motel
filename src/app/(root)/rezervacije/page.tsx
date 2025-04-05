import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React from 'react';

 const Rezervacija = async () => {
      const session = await auth();
      console.log ('SESIJA JE  ',session?.user?.name);
      if (session?.user?.name!=='ADMIN') redirect("/not-authorized");
    return (
        <div className='bg-gray-800 rounded-lg p-4 text-center mb-6 md:ml-6 text-white'>
<h5>Rezervacije</h5>
        </div>
    );
}

export default Rezervacija;
