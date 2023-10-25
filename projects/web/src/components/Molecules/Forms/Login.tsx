import {
    SubmitHandler,
    createForm,
    email,
    minLength,
    required,
} from '@modular-forms/solid';
import { TextField } from '~/components/Atoms/Input/TextField';

type Inputs = {
    email: string;
    password: string;
};

export const LoginForm = () => {
    const [form, { Form, Field, FieldArray }] = createForm<Inputs>();

    const handleSubmit: SubmitHandler<Inputs> = async (values) => {
        // TODO
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div class="flex flex-col gap-2 mb-5">
                <Field
                    name="email"
                    validate={[
                        required('You have to enter your email'),
                        email('This field should be an email address'),
                    ]}
                >
                    {(field, props) => (
                        <TextField
                            {...field}
                            {...props}
                            required
                            label="Email"
                            type="email"
                        />
                    )}
                </Field>
                <Field
                    name="password"
                    validate={[
                        required('You have to choose a password'),
                        minLength(
                            8,
                            'Your password must be at least 8 characters long'
                        ),
                    ]}
                >
                    {(field, props) => (
                        <TextField
                            {...field}
                            {...props}
                            minLength={8}
                            required
                            label="Password"
                            type="password"
                        />
                    )}
                </Field>
            </div>
            <button type="submit" class="btn">
                Login
            </button>
        </Form>
    );
};

export default LoginForm;
