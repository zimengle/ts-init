import {expect} from "chai";
import "mocha";
import {name} from "../module";

describe("module tester", () => {
    it("name is jack", () => {
        expect(name).eq("zhangzimeng");
    });
});

