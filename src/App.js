import "./App.css";
import img1 from "./assets/image1.jpeg";
import img2 from "./assets/image2.jpeg";
import img3 from "./assets/image3.jpeg";
import img4 from "./assets/image4.png";
import a from "./assets/a.JPG";
import b from "./assets/b.JPG";
import c from "./assets/c.JPG";
import d from "./assets/d.JPG";
import e from "./assets/e.JPG";
import f from "./assets/f.JPG";
function App() {
  return (
    <>
      <div className="header">
        <h1>Business and Industrial Parks</h1>
      </div>
      <div className="bg-img">
        <img src={img1} className="bg-img" />
      </div>
      <div className="flex1">
        <div>
          <img src={img2} className="portrait" />
        </div>

        <div className="box">
          <p>
            We have several business and industrial parks with available space for your business
          </p>
          <a href="#">READ MORE</a>
        </div>
      </div>
      <div className="flex2">
        <div className="flex2left">
          <h3>Construction Machinery Co.</h3>
          <h4>We has a proud tradition of service as a General Contractor since 1974</h4>
          <p>
            We headquartered in San Diego, brings over 42 years of local and national construction
            experience; with a reputation for delivering large and unique design-build projects
            ahead of schedule and on budget. Our company has served clients and building owners for
            over four decades.
          </p>
          <a href="#">READ MORE</a>
        </div>

        <div className="flex2right">
          <img src={img3} className="building" />
        </div>
      </div>
      <div className="row3">
        <div className="row3text">
          <h4>What we do</h4>
          <h3>Company Certifications</h3>
          <p>
            Our company offers a variety of services to meet your projects needs, to take you from
            collaboration meetings all the way to ribbon-cutting and beyond. We believe that every
            project is unique, and can customize our approach to fit your particular project.
          </p>
        </div>
        <div className="flex3">
          <div>
            <span>
              <img src={a} />
            </span>
            <h3>Healthcare Building</h3>
            <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div>
            <span>
              <img src={b} />
            </span>
            <h3>Healthcare Building</h3>
            <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div>
            <span>
              <img src={c} />
            </span>
            <h3>Healthcare Building</h3>
            <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div>
            <span>
              <img src={d} />
            </span>
            <h3>Healthcare Building</h3>
            <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div>
            <span>
              <img src={e} />
            </span>
            <h3>Healthcare Building</h3>
            <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div>
            <span>
              <img src={f} />
            </span>
            <h3>Healthcare Building</h3>
            <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </div>
      <div className="flex4">
        <div>
          <span>
            <i className="bi bi-cone-striped"></i>
          </span>
          <h4>Healthcare Building</h4>
          <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <a href="#">READ MORE</a>
        </div>
        <div>
          <img src={img2} className="portrait2" />
        </div>
        <div className="flex4inner">
          <div>
            <span>
              <i className="bi bi-cone-striped"></i>
            </span>
            <h4>Healthcare Building</h4>
          </div>
          <div>
            <span>
              <i className="bi bi-cone-striped"></i>
            </span>
            <h4>Healthcare Building</h4>
          </div>
        </div>
      </div>
      <div className="row5">
        <div className="row5text">
          <h4>Portfolio</h4>
          <h3>Recent Projects</h3>
        </div>
        <div className="flex5">
          <div>
            <img src={img3} className="building2" />
          </div>
          <div>
            <img src={img3} className="building2" />
          </div>
          <div>
            <img src={img3} className="building2" />
          </div>
          <div>
            <img src={img3} className="building2" />
          </div>
          <div>
            <img src={img3} className="building2" />
          </div>
          <div>
            <img src={img3} className="building2" />
          </div>
          <div>
            <img src={img3} className="building2" />
          </div>
          <div>
            <img src={img3} className="building2" />
          </div>
        </div>
      </div>
      <div className="flex6">
        <div>
          <img src={img4} className="world" />
        </div>

        <div className="">
          <h4>Elvo Construction</h4>
          <h3>The Best World Team</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus
            eleifend. Nullam ornare sapien quis vulputate cursus. Vivamus vel pellentesque purus,
            sed dignissim elit. Maecenas ac augue metus. Suspendisse in elit nibh. Vestibulum in
            nibh risus. Phasellus ut cursus sem.
          </p>
          <a href="#">READ MORE</a>
        </div>
      </div>
      <div className="flex7">
        <div>
          <p>Contact us today to plan your boats maintenance or repair procedure.</p>
          <h4>
            4262 Richison Drive,
            <br />
            Missoula, MT 59801
          </h4>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>
            Freephone: +1 800 559 6580 <br />
            Telephone: +1 800 603 6035 <br />
            Fax: +1 800 889 9898
          </p>
        </div>
      </div>{" "}
    </>
  );
}

// function App() {
// 	const [newItemName, setNewItemName] = useState("");
// 	const [newItemPrice, setNewItemPrice] = useState(0);
// 	const [items, setItems] = useState([]);
// 	const itemsCollectionRef = collection(db, "menu");
// 	const createItem = async () => {
// 		await addDoc(itemsCollectionRef, { name: newItemName, price: newItemPrice });
// 	};
// 	const updateItem = async (id, price) => {
// 		const itemDoc = doc(db, "menu", id);
// 		const newFields = { price: price + 1 };
// 		await updateDoc(itemDoc, newFields);
// 	};
// 	const deleteItem = async (id) => {
// 		const itemDoc = doc(db, "menu", id);
// 		await deleteDoc(itemDoc);
// 	};
// 	//runs when page loads
// 	useEffect(() => {
// 		const getItems = async () => {
// 			const data = await getDocs(itemsCollectionRef);
// 			setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
// 		};
// 		getItems();
// 	}, []);
// 	return (
// 		<div classNameName="App">
// 			<input
// 				placeholder="Name"
// 				onChange={(event) => {
// 					setNewItemName(event.target.value);
// 				}}
// 			/>
// 			<input
// 				type="number"
// 				placeholder="Price"
// 				onChange={(event) => {
// 					setNewItemPrice(event.target.value);
// 				}}
// 			/>
// 			<button onClick={createItem}>Create Item</button>
// 			{items.map((item) => {
// 				return (
// 					<div>
// 						<h1>Item: {item.name}</h1>
// 						<h1>Price: {item.price}</h1>
// 						<button
// 							onClick={() => {
// 								updateItem(item.id, item.price);
// 							}}
// 						>
// 							Increase price
// 						</button>
// 						<button
// 							onClick={() => {
// 								deleteItem(item.id);
// 							}}
// 						>
// 							Delete
// 						</button>
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// }

export default App;
