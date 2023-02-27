/*
 * @Description: 
 * @Author: zhh_e
 * @Date: 2023-02-27 10:02:32
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-27 17:14:43
 */

import { Space, Table, Tag, message, Popconfirm, Cascader, Input, Pagination, Button, Drawer, Descriptions } from "antd"
import { ColumnsType } from "antd/es/table"
import { useEffect, useState } from "react"
import Mock from "mockjs"
console.log(' ====> Mock.random', Mock.Random);
interface DataType { key: string, name: string, age: number, address: string, tags?: string[], [key: string]: any }
interface CascaderOption { value: string | number, label: string, children?: CascaderOption[] }
interface PaginatonOption { pageSize: number, current: number, total: number }
let dataList: DataType[] = [
    { name: 'a_name', key: '1', age: 10, address: 'a_address', tags: ['man', 'strong'] },
    { name: 'b_name', key: '2', age: 11, address: 'b_address', tags: ['woman', 'slice'] },
    { name: 'c_name', key: '3', age: 12, address: 'c_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '4', age: 13, address: 'd_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '41', age: 13, address: 'd_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '42', age: 13, address: 'd_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '43', age: 13, address: 'd_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '44', age: 13, address: 'd_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '45', age: 13, address: 'd_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '46', age: 13, address: 'd_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '47', age: 13, address: 'd_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '48', age: 13, address: 'd_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '49', age: 13, address: 'd_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '40', age: 13, address: 'd_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '14', age: 13, address: 'd_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '24', age: 13, address: 'd_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '34', age: 13, address: 'd_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '94', age: 13, address: 'd_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '54', age: 13, address: 'd_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '64', age: 13, address: 'd_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '74', age: 13, address: 'd_address', tags: ['man', 'strong'] },
    { name: 'd_name', key: '84', age: 13, address: 'd_address', tags: ['man', 'strong'] },
]

const cascaderOption: CascaderOption[] = [
    { value: 'A', label: 'A', children: [{ value: 'A-1', label: 'A-1', children: [{ value: 'A-2', label: 'A-2' }] }] },
    { value: 'B', label: 'B', children: [{ value: 'B-1', label: 'B-1', children: [{ value: 'B-2', label: 'B-2' }] }] },
    { value: '3', label: '3', children: [{ value: '3-1', label: '3-1', children: [{ value: '3-2', label: '3-2' }] }] },
]

function getTableScroll() {
    let parent = document.getElementsByClassName('page-container')[0]
    let box = document.querySelector('#tableBox')
    let height = (box?.clientHeight || 0) - 48 - 47
    return height || 0
}

export const TablePage: React.FC = () => {
    const [messageApi, contextHolder] = message.useMessage()
    const [scrollY, setScrollY] = useState(0)
    const [pageOption, setPageOption] = useState<PaginatonOption>({ current: 1, pageSize: 20, total: 10 })
    const [open, setOpen] = useState(false)
    const [watchInfo, setWatchInfo] = useState<DataType>({ key: '', name: '', age: 0, address: '' })
    useEffect(() => {
        let v = getTableScroll()
        setScrollY(v)
    }, [])


    const tableColumns: ColumnsType<DataType> = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
    }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    }, {
        title: 'Tags',
        dataIndex: 'tags',
        key: 'tags',
        render: (_, { tags }) => {
            return (
                <>
                    {
                        tags &&
                        tags.map(tag => {
                            let color = tag.length >= 4 ? 'geekblue' : 'green'
                            return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>
                        })
                    }
                </>
            )
        }
    }, {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Popconfirm okButtonProps={{
                    type: 'primary',
                    danger: true
                }} title={`确认删除${record.name}?`} onConfirm={() => onDel(record)}>
                    <Button danger type="primary" ghost >Deleted</Button>
                </Popconfirm>
                <Button type="primary" onClick={() => watchDetail(record)}>Watch</Button>
            </Space>
        )
    }]


    function onDel(record: DataType) {
        messageApi.success(`${record.name} del`)
    }

    function watchDetail(record: DataType) {
        let _info = { ...record }
        let mockInfo = Mock.mock({
            "email": "@email",
            address: '@city',
            ip: "@ip"
        })
        setWatchInfo({ ..._info, ...mockInfo })
        setOpen(true)
    }

    function closeDetail() {
        setWatchInfo({ key: '', name: '', age: 0, address: '' })
        setOpen(false)
    }

    function onCascaderChange(e: any) {
        console.log(' ====> e', e);
    }
    function onSearch(v: any) {
        console.log(' ====> v', v);
    }

    useEffect(() => {
        console.log(' ====> pageOption', pageOption);
    }, [pageOption.current, pageOption.pageSize])

    function onPageChange(current: number, pageSize: number) {
        setPageOption(state => {
            return { ...state, current, pageSize }
        })
    }

    const DetailDesc: React.FC = () => {
        return (
            <Descriptions title={watchInfo.name || 'userInfo'} bordered column={2}>
                {Object.keys(watchInfo).map(key => {
                    let value = watchInfo[key]
                    if (typeof value === 'string') {
                        return (
                            <Descriptions.Item key={key} label={key} >{value}</Descriptions.Item>
                        )
                    } else if (key === 'tags') {
                        return (
                            <Descriptions.Item key={key} label={key} >{
                                value &&
                                value.map((tag: string) => {
                                    let color = tag.length >= 4 ? 'geekblue' : 'green'
                                    return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>
                                })}
                            </Descriptions.Item>
                        )
                    }
                })}
            </Descriptions>
        )
    }

    return (
        <div className="page-container bg-white rd-2 h-full flex flex-col overflow-hidden">
            {contextHolder}
            <Drawer width={700} placement="right" open={open} onClose={() => closeDetail()} title="查看详情">
                <DetailDesc />
            </Drawer>
            <div className="p-2 flex justify-between">
                <Space.Compact>
                    <Cascader options={cascaderOption} placeholder="place select!" onChange={onCascaderChange}></Cascader>
                    <Cascader options={cascaderOption} placeholder="place select!" onChange={onCascaderChange}></Cascader>
                </Space.Compact>
                <Space.Compact>
                    <Input.Search placeholder="please input to search" allowClear enterButton="Search" onSearch={onSearch} />
                </Space.Compact>
            </div>
            <div className="flex-1 " id="tableBox">
                <Table size="middle"
                    pagination={false}
                    scroll={{ y: scrollY }}
                    dataSource={dataList} columns={tableColumns} />
                <div className="p-y-2 bg-white flex justify-center shadow">
                    <Pagination
                        showQuickJumper={true}
                        showSizeChanger={true}
                        defaultCurrent={1}
                        total={pageOption.total}
                        pageSize={pageOption.pageSize}
                        current={pageOption.current}
                        onChange={onPageChange}
                    />
                </div>
            </div>
        </div>
    )
}