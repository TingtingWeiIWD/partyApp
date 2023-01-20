import Header from "../../components/Header/Header";
import dinner from "./dinner.png";
import chiliIcon from "./chili.svg";

function Menu() {
  return (
    <main
      style={{
        backgroundColor: "#2f0d18",
        margin: 0,
        height: "100%",
        paddingBottom: "50px",
      }}
    >
      <Header />
      <img
        src={dinner}
        alt="dinner"
        style={{
          width: "100%",
        }}
      ></img>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <span
          className="Chinese"
          style={{
            fontSize: 30,
            textAlign: "center",
            color: "white",
          }}
        >
          菜單
        </span>
        <span
          className="h1"
          style={{
            marginLeft: 15,
            fontSize: 30,
            textAlign: "center",
            color: "white",
          }}
        >
          Menu
        </span>
      </div>
      <div className="divider">---- 主菜 · Hot Plate ----</div>
      <div className="menuItem">
        <div className="menuItemCh">年年有餘·松鼠魚</div>
        <div className="menuItemEn">
          Squirrel Fish: Deep-Fried Tilapia in Sweet and Sour Sauce
        </div>
      </div>
      <div className="menuItem">
        <div className="menuItemCh">甜甜蜜蜜·糖醋小排</div>
        <div className="menuItemEn">Sweet and Sour Spareribs</div>
      </div>
      <div className="menuItem">
        <div className="menuItemCh">家肥屋潤·廣式脆皮燒肉</div>
        <div className="menuItemEn">Crispy Roasted Pork Belly</div>
      </div>
      <div className="menuItem">
        <div className="menuItemCh">事事如意·番茄腐竹燉牛肋排</div>
        <div className="menuItemEn">
          Beef Short Ribs Stew with Tomatoes and Yuba (bean curd stick)
        </div>
      </div>
      <div className="menuItem">
        <div className="menuItemCh">撥雲見日·避風塘大蝦</div>
        <div className="menuItemEn">
          Stir Fry Shrimp in Bifeng Tang (a tyfoon shelter) style.
        </div>
      </div>
      <div className="menuItem">
        <div className="menuItemCh">金玉滿堂·金沙雞翅</div>
        <div className="menuItemEn">
          Salted Duck Egg Yolk Flavored Deep-fried Chicken Wings
        </div>
      </div>

      <div className="menuItem">
        <div
          className="menuItem"
          style={{
            marginTop: 30,
            textAlign: "center",
          }}
        >
          <span>
            <span className="menuItemCh">辭舊迎新·酥炸豆腐</span>
            <img
              src={chiliIcon}
              alt="chili icon"
              style={{
                width: "7%",
                marginLeft: "5px",
              }}
            />
          </span>
        </div>
        <div className="menuItemEn">Deep-fried Tofu</div>
      </div>
      <div className="divider">---- 冷盤 · Cold Dish ----</div>
      <div className="menuItem">
        <div className="menuItemCh">平步青雲·果仁菠菜</div>
        <div className="menuItemEn">Spinach with Nuts</div>
      </div>
      <div className="menuItem">
        <div className="menuItemCh">健康如意·兔兔乐园沙拉</div>
        <div className="menuItemEn">Rabbit New Year Salad </div>
      </div>
      <div className="divider">---- 主食 · Carbs ----</div>
      <div className="menuItem">
        <div className="menuItemCh">錢袋鼓鼓·豬肉白菜/西葫蘆雞蛋水餃</div>
        <div className="menuItemEn">
          Pork + Cabbage / Zucchini + Egg Dumplings
        </div>
      </div>
      <div className="menuItem">
      <div
          className="menuItem"
          style={{
            marginTop: 30,
            textAlign: "center",
          }}
        >
          <span>
            <span className="menuItemCh">福壽綿長·酸豆角肉末拌米粉</span>
            <img
              src={chiliIcon}
              alt="chili icon"
              style={{
                width: "7%",
                marginLeft: "5px",
              }}
            />
          </span>
        </div>
        <div className="menuItemEn">
          Rice Noodle topped with Acid Long-bean and Ground Pork Fry
        </div>
      </div>
      <div className="divider">---- 甜品 · Desserts ----</div>
      <div className="menuItem">
        <div className="menuItemCh">有滋有味·鹹奶蓋紅茶</div>
        <div className="menuItemEn">
          Iced Black Tea topped with Whipped Cream & Creamcheese
        </div>
      </div>
      <div className="menuItem">
        <div className="menuItemCh">好運纏繞·麻薯肉鬆芋泥可頌</div>
        <div className="menuItemEn">
          Mochi, Mashed Taro Puff and Meat Floss Croissant Sandwich
        </div>
      </div>
    </main>
  );
}

export default Menu;
