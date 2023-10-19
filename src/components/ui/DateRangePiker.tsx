import { DatePicker, Space } from 'antd';
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';

const { RangePicker } = DatePicker;


const onChange = (
    value: DatePickerProps['value'] | RangePickerProps['value'],
    dateString: [string, string] | string,
) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
};

const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
    console.log('onOk: ', value);
};

const DateRangePiker = () => {
    return (
        <div className='w-full'>
            <Space direction="vertical" size={12}>
                <RangePicker
                    showTime={{ format: 'HH:mm' }}
                    format="YYYY-MM-DD HH:mm"
                    onChange={onChange}
                    onOk={onOk}
                    className='bg-transparent !text-white border-purple-700 !w-full py-2 border-dashed'
                />
            </Space>
        </div>
    );
};

export default DateRangePiker;