import { JSX } from 'solid-js';

type Props = {
    children?: JSX.Element | JSX.Element[];
};

const FormWrapper = ({ children }: Props) => {
    return (
        <div class="max-w-lg mx-auto min-h-[80vh] flex flex-col justify-center">
            <div class="mx-5 p-6 rounded border border-$border-color">
                {children}
            </div>
        </div>
    );
};

export default FormWrapper;
