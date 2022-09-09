import { mount } from "@vue/test-utils";
import WrapperLike from "@vue/test-utils/dist/interfaces/wrapperLike";
import { beforeEach } from "vitest";
import SignUp from "./Signup.vue";
import { it, describe, expect } from "vitest";

describe('SignUp', () => {
	let wrapper: WrapperLike;

	beforeEach(() => {
		wrapper = mount(SignUp)
	});

	it('requires name', () => {
		expect(wrapper.find('[name="name"]').exists()).toBeTruthy();
	})
});