import { Button } from 'antd'

const Schedule = () => {
	const disableStyle = {
		color: '#004EC2',
		border: '1px solid #004EC2',
		backgroundColor: 'white'
	}
	const activeStyles = {}
	return (
		<div className="p-10 flex">
			<div className="flex flex-col w-1/4 h-full">
				<Button className="text-white bg-none">Schedule</Button>
				<span className="w-full flex gap-x-2">
					<Button>Mon</Button>
					<Button>Tue</Button>
					<Button>Wed</Button>
					<Button>Thu</Button>
					<Button>Fri</Button>
					<Button>Sut</Button>
					<Button>Sun</Button>
				</span>
			</div>
		</div>
	)
}
