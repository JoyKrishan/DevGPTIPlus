import { ColorButton } from "../ui/ColorButton";
import ReactDOM from "react-dom";

const app = document.createElement("div");
app.id = "selector-app";
  // NOTE: React注入がうまくいかない場合に復元
  // const selector = createSelector(savedTemplates);
  // parentLabel?.appendChild(selector);
  parentLabel?.appendChild(app);
  ReactDOM.render(
    <ColorButton color="#039BE5" onClick={() => {}} />,
    document.getElementById(app.id)
  );