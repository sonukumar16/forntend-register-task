import { mount, shallow } from "enzyme";
import { render, screen, cleanup, waitFor, fireEvent } from "@testing-library/react"
import renderer from 'react-test-renderer';
import {Formik} from "formik"

import SignUp from './';


describe('SignUp test cases', () => {

    let wrapper;
    beforeEach(()=>{
      wrapper = shallow(<SignUp />);
    })
    
    afterEach(cleanup);

    it('should match snapshot', () => {
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render button correctly', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('button')).toBeTruthy();
    });

    it('Should have Sign Up text', () => {
        const { getByText } = render(wrapper)
        expect(getByText('Sign Up')).toHaveTextContent("Sign Up");
    });
    
    it('Should submit signup data successfully', async() => {
        const { container, } = render(<SignUp />)
        const fistName = container.querySelector('input[name="firstName"]');
        const lastName = container.querySelector('input[name="lastName"]');
        const email = container.querySelector('input[name="email"]');
        const password = container.querySelector('input[name="password"]');
        const confirmPassword = container.querySelector('input[name="confirmPassword"]');
        const mobile = container.querySelector('input[name="mobile"]');
        const submit = container.querySelector('button[type="submit"]');
        const termsCondition = container.querySelector('input[name="termsCondition"]');

        await waitFor(() => {
            fireEvent.change(fistName, {
              target: {
                value: "mockFirstName"
              }
            })
          })
        await waitFor(() => {
            fireEvent.change(lastName, {
              target: {
                value: "mockLastName"
              }
            })
          })

          await waitFor(() => {
            fireEvent.change(email, {
              target: {
                value: "mock@email.com"
              }
            })
          })
        
          await waitFor(() => {
            fireEvent.change(password, {
              target: {
                value: "password123"
              }
            })
          })

          await waitFor(() => {
            fireEvent.change(confirmPassword, {
              target: {
                value: "password123"
              }
            })
          })

          await waitFor(() => {
            fireEvent.change(mobile, {
              target: {
                value: "+971525343461"
              }
            })
          })

          await waitFor(() => {
            fireEvent.click(termsCondition)
          })
        
          await waitFor(() => {
            fireEvent.submit(submit);
          })

        const expectedData= {
            firstName: "mockFirstName",
            lastName: "mockLastName",
            email: "mock@email.com",
            password: "password123",
            confirmPassword: "password123",
            mobile: "+971525343461",
            termsCondition: true,
        }

        const actualData = {
            firstName: fistName.getAttribute("value"),
            lastName: lastName.getAttribute("value"),
            email: email.getAttribute("value"),
            password: password.getAttribute("value"),
            confirmPassword: confirmPassword.getAttribute("value"),
            mobile: mobile.getAttribute("value"),
            termsCondition:termsCondition.checked,
        }
        expect(actualData).toStrictEqual(expectedData);
    });
});
