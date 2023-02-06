/*
 * @Date: 2023-02-06 11:43:19
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-02-06 11:48:43
 * @FilePath: \react-about\src\component\PageHeader.tsx
 * @Description: Description here
 */
export default function PageHeader(props: { title: String }) {
    return (
        <>
            <h2 className="font-bold text-center text-2xl my-8">{props.title}</h2>
        </>
    )
}
