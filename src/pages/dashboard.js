import './style.css';
export default function Dashboard(){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
<div className="cartContainer">
<a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2021</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">New Employee <br/> {date}</p>
</a>
<a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2021</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">New Employee <br/> {date}</p>
</a>
<a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2021</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">New Employee <br/> {date}</p>
</a>
<a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2021</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">New Employee <br/> {date}</p>
</a>
<a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2021</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">New Employee <br/> {date}</p>
</a>
<a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2021</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">New Employee <br/> {date}</p>
</a>

</div>
  )
}