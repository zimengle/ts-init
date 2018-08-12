import {expect} from "chai";
import "mocha";
import {packageJSON} from "../index";

describe("example tester", () => {
    it("author is zhangzimeng", () => {
        expect(packageJSON.author).eq("zhangzimeng");
    });
});

