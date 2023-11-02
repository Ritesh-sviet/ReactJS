import Ritesh from "./ritesh"

function App() {
  return (
    <>

    <Ritesh/>
     {/* {we use fragment to use multiple export element in the return if we try to use export element then we will get the errors fragement are denoted as    <></>  we can take <div></div> instead of fragments} */}

    <form>
      <label for = "Name">Name</label>
      <input type = "text"/>
      <input type = "submit" onclick = "aalo()"/>      
    </form>

    function aalo(){
      alert("hello")
    }

    aalo();


    </>
  );
}

export default App;
