
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function Users({ users }){
const{ user, isLoading, isError} = getData()
if(isError) return <div>Error fetching data</div>
if (!isLoading) return <div>Loading...</div>
return (
<article>
{
user.map(u => (
<div>
<h1>{u.name}</h1>
</div>
))
}
</article>
)
}


// export async function getStaticProps(){
//     const res = await fetch('http://localhost:3000/api/getData')
//     const users = await res.json()
//         return {
//             props : {
//             users
//             }
//         }
//     }







function getData(){
    const { data, error} = useSWR('http://localhost:3000/api/getData', fetcher)
    return{
    user : data,
    isLoading : !error && !data,
    isError: error
    }

}