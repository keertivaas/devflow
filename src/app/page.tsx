import ClientComponent from "./components/ClientComponent";

export default function Home() {
  console.log('Server comp');
  return(
    <>
    <h3>Hello NextJS</h3>
    <ClientComponent />
    </>
  )
}
