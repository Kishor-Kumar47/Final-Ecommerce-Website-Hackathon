import Delivery from "@/components/Delivery";
import Shophead from "@/components/Shophead";
import Image from "next/image";
import React from "react";
import { MdManageAccounts } from "react-icons/md";
import { FaCalendar, FaTag } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <main>
      {/* Shophead componet  */}
      <section>
      <Navbar bgColor="bg-white"/>
        <Shophead headText="Blog" linkChange="Blog" />
      </section>
      {/* blog section  */}
      <section className="w-[1363px] h-[2600px] top-[416] flex-col justify-items-center ">
        <main className="flex w-full h-[90%] flex justify-center">
          {/* left side  */}
          <div className="w-[60%] h-full  flex flex-col items-center justify-center">
            <div className="w-[90%] h-[30%] ">
              <Image
                className="w-[90%] h-[45%]"
                src={"/blog-img-2.png"}
                width={500}
                height={250}
                alt="img"
              />

              <div className="flex gap-10">
                <span className="flex items-center gap-2 text-xl text-gray-400">
                  <MdManageAccounts />
                  <h3>Admin</h3>
                </span>
                <span className="flex items-center gap-2 text-xl text-gray-400">
                  <FaCalendar />
                  <h3>14 Oct 2022</h3>
                </span>
                <span className="flex items-center gap-2 text-xl text-gray-400">
                  <FaTag />
                  <h3>Wood</h3>
                </span>
              </div>

              <h2 className="w-[70%] h-[12%] text-[30px] font-medium">
                Going all in with millennial design
              </h2>
              <p className="w-[90%] h-[20%] text-[16px] text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum ipsum dolores sequi aliquid? Incidunt beatae eos hic
                tempora. Repellendus, obcaecati. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Laborum ipsum dolores sequi
                aliquid? Incidunt beatae eos hic tempora. Repellendus,
                obcaecati. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Laborum ipsum .
              </p>
              <span className="py-3 border-b-[3px] border-black  ">
                <button className="w-[90px] ">Read more</button>
              </span>
            </div>

            {/* blog2 */}

            <div className="w-[90%] h-[30%] ">
              <Image
                className="w-[90%] h-[45%]"
                src={"/blog-img-1.png"}
                width={500}
                height={250}
                alt="img"
              />

              <div className="flex gap-10">
                <span className="flex items-center gap-2 text-xl text-gray-400">
                  <MdManageAccounts />
                  <h3>Admin</h3>
                </span>
                <span className="flex items-center gap-2 text-xl text-gray-400">
                  <FaCalendar />
                  <h3>14 Oct 2022</h3>
                </span>
                <span className="flex items-center gap-2 text-xl text-gray-400">
                  <FaTag />
                  <h3>Handmade</h3>
                </span>
              </div>

              <h2 className="w-[70%] h-[12%] text-[30px] font-medium">
                Going all in with millennial design
              </h2>
              <p className="w-[90%] h-[20%] text-[16px] text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum ipsum dolores sequi aliquid? Incidunt beatae eos hic
                tempora. Repellendus, obcaecati. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Laborum ipsum dolores sequi
                aliquid? Incidunt beatae eos hic tempora. Repellendus,
                obcaecati. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Laborum ipsum .
              </p>
              <span className="py-3 border-b-[3px] border-black  ">
                <button className="w-[90px] ">Read more</button>
              </span>
            </div>

            {/* blog-3 */}

            <div className="w-[90%] h-[30%] ">
              <Image
                className="w-[90%] h-[45%]"
                src={"/blog-img-3.png"}
                width={500}
                height={250}
                alt="img"
              />

              <div className="flex gap-10">
                <span className="flex items-center gap-2 text-xl text-gray-400">
                  <MdManageAccounts />
                  <h3>Admin</h3>
                </span>
                <span className="flex items-center gap-2 text-xl text-gray-400">
                  <FaCalendar />
                  <h3>14 Oct 2022</h3>
                </span>
                <span className="flex items-center gap-2 text-xl text-gray-400">
                  <FaTag />
                  <h3>Wood</h3>
                </span>
              </div>

              <h2 className="w-[70%] h-[12%] text-[30px] font-medium">
                Going all in with millennial design
              </h2>
              <p className="w-[90%] h-[20%] text-[16px] text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum ipsum dolores sequi aliquid? Incidunt beatae eos hic
                tempora. Repellendus, obcaecati. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Laborum ipsum dolores sequi
                aliquid? Incidunt beatae eos hic tempora. Repellendus,
                obcaecati. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Laborum ipsum .
              </p>
              <span className="py-3 border-b-[3px] border-black  ">
                <button className="w-[90px] ">Read more</button>
              </span>
            </div>

            {/* blogs end */}
          </div>
          {/* right side */}
          <div className="w-[30%] h-[50%] mt-10 ">
            <div className="w-full h-[45%] flex flex-col gap-8 ">
              <div className="w-[80%] h-[12%] rounded-xl border-[2px] border-black flex justify-between ">
                <input className="w-[80%] h-full rounded-xl" type="text" />

                <button className=" text-3xl ">
                  <span className="">
                    <CiSearch />{" "}
                  </span>
                </button>
              </div>
              {/* categories    ....... */}
              <div>
                <h2 className="w-[70%] h-[12%] text-[30px] font-medium mb-6">
                  Categories
                </h2>
                <ul className="text-[20px] font-bold text-gray-400 flex flex-col gap-10">
                  <li className="flex justify-between">
                    <span>Craft</span>
                    <span>2</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Design</span>
                    <span>8</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Handmade</span>
                    <span>7</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Interior</span>
                    <span>1</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Wood</span>
                    <span>6</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* down side */}
            <div className="flex flex-col gap-10">
              <h2 className="w-[70%] h-[12%] text-[30px] font-medium">
                Recent Posts 
              </h2>
                {/* posts 1 */}
              <div className="w-[80%] h-[25%]  flex gap-3">
                <Image 
                className="w-[25%] h-[25%] rounded-xl"
                src={'/blog-img-1.png'}
                width={300}
                height={202}
                alt="img"
                />
                <span>
                  <h3 className="text-[16px]">Going all in with millennial design</h3>
                  <p className="text-gray-400">03 Aug 2022</p>
                </span>
              </div>
                {/* posts 1 */}
              <div className="w-[80%] h-[25%]  flex gap-3">
                <Image 
                className="w-[25%] h-[25%] rounded-xl"
                src={'/blog-img-2.png'}
                width={300}
                height={202}
                alt="img"
                />
                <span>
                  <h3 className="text-[16px]">Going all in with millennial design</h3>
                  <p className="text-gray-400">03 Aug 2022</p>
                </span>
              </div>
                {/* posts 1 */}
              <div className="w-[80%] h-[25%]  flex gap-3">
                <Image 
                className="w-[25%] h-[25%] rounded-xl"
                src={'/blog-img-3.png'}
                width={300}
                height={202}
                alt="img"
                />
                <span>
                  <h3 className="text-[16px]">Going all in with millennial design</h3>
                  <p className="text-gray-400">03 Aug 2022</p>
                </span>
              </div>
                {/* posts 1 */}
              <div className="w-[80%] h-[25%]  flex gap-3">
                <Image 
                className="w-[25%] h-[25%] rounded-xl"
                src={'/blog-img-2.png'}
                width={300}
                height={202}
                alt="img"
                />
                <span>
                  <h3 className="text-[16px]">Going all in with millennial design</h3>
                  <p className="text-gray-400">03 Aug 2022</p>
                </span>
              </div>
                {/* posts 1 */}
              <div className="w-[80%] h-[25%]  flex gap-3">
                <Image 
                className="w-[25%] h-[25%] rounded-xl"
                src={'/blog-img-3.png'}
                width={300}
                height={202}
                alt="img"
                />
                <span>
                  <h3 className="text-[16px]">Going all in with millennial design</h3>
                  <p className="text-gray-400">03 Aug 2022</p>
                </span>
              </div>

            </div>




          </div>
        </main>

        {/* next buttons */}
        <main className="w-[40%] h-[3%]   flex gap-10 items-end justify-center">
          <div className="w-[50px] h-[50px] bg-orange-100 hover:bg-orange-200 rounded-xl text-xl flex items-center justify-center">1</div>
          <div className="w-[50px] h-[50px] bg-orange-100 hover:bg-orange-200 rounded-xl text-xl flex items-center justify-center">2</div>
          <div className="w-[50px] h-[50px] bg-orange-100 hover:bg-orange-200 rounded-xl text-xl flex items-center justify-center">3</div>
          <div className="w-[70px] h-[50px] bg-orange-100 hover:bg-orange-200 rounded-xl text-xl flex items-center justify-center">Next</div>
        </main>
      </section>

      {/* delivery */}
      <section>
        <Delivery />
      </section>
    </main>
  );
};

export default page;
