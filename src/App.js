import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import { Boton } from './components/Boton';
import { Title } from './components/Title';

function App() {
  const name = "alejandro";
  const links = ["Nosotros","Productos","Contacto"];
  //o con objeto
  const linksObj = [{nombre:"Nosotros",tag:"#"},{nombre:"Producto",tag:"#"},{nombre:"Contacto",tag:"#"}];

  return (
    
    <>
    <NavBar id="1" name={name} links={links}> 
    </NavBar>
    <ItemListContainer mensaje="Bienvenido a la tienda onlina de Govinda Comidas" />
    </>

  );
}

export default App;


