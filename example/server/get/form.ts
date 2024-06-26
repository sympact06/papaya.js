import { PapayaRoute } from "../../..";
import { render, extractGetParameters } from "../../../src/util";

export default class GetForm extends PapayaRoute {
    path = "/form";
    callback = (request: Request) => {
        return new Promise((resolve) => {
            let getParams = extractGetParameters(request);
            console.log(getParams);
            render("form.ejs", getParams).then((html) => {
                resolve(html);
            })
        })
    };
}