import React from 'react'
import { useNavigate } from 'react-router-dom'

type TypeMenuSvgProps = {
	white?: boolean
}

export const LogoIasSvg = ({ white }: TypeMenuSvgProps) => {
	const color = () => (white ? 'white' : '#1F5CB8')
	const navigate = useNavigate()
	return (
		<svg
			onClick={() => navigate('/user')}
			className="cursor-pointer"
			width="141"
			height="40"
			viewBox="0 0 141 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M45.5938 0.25H55.0542V3.03171H48.7169V6.74782H54.4848V9.52953H48.7169V13.4276H55.1687V16.2093H45.5938V0.25Z"
				fill={color()}
			/>
			<path
				d="M60.4861 12.3787C60.4861 12.9113 60.5546 13.2988 60.6916 13.5411C60.8286 13.7844 61.0484 13.906 61.353 13.906C61.535 13.906 61.7139 13.8907 61.8887 13.86C62.0635 13.8294 62.2803 13.7619 62.5389 13.6546L62.8579 15.9803C62.6146 16.102 62.2424 16.2236 61.7405 16.3453C61.2385 16.4669 60.7222 16.5273 60.1906 16.5273C59.3247 16.5273 58.6633 16.3259 58.2074 15.9231C57.7514 15.5203 57.5234 14.8558 57.5234 13.9285V0.25H60.4871V12.3787H60.4861Z"
				fill={color()}
			/>
			<path
				d="M73.2519 15.2276C72.7959 15.5925 72.1764 15.9003 71.3944 16.1507C70.6113 16.4012 69.7791 16.5269 68.8979 16.5269C67.0587 16.5269 65.7134 15.9912 64.8628 14.9199C64.0112 13.8485 63.5859 12.3784 63.5859 10.5086C63.5859 8.50281 64.0644 6.99797 65.0223 5.99508C65.9802 4.99219 67.3245 4.49023 69.0573 4.49023C69.635 4.49023 70.1972 4.56691 70.7442 4.71821C71.2911 4.87053 71.7777 5.121 72.203 5.47063C72.6283 5.82026 72.9697 6.29155 73.2294 6.88449C73.4881 7.47743 73.6169 8.21452 73.6169 9.09575C73.6169 9.41471 73.5974 9.75719 73.5596 10.1222C73.5218 10.4871 73.4645 10.8674 73.3889 11.262H66.5721C66.6171 12.2199 66.8635 12.9417 67.3102 13.4283C67.757 13.9149 68.4808 14.1582 69.4796 14.1582C70.1001 14.1582 70.6573 14.0632 71.149 13.873C71.6418 13.6829 72.0159 13.4896 72.2735 13.2913L73.2519 15.2276ZM69.0216 6.86098C68.2507 6.86098 67.6803 7.09304 67.3092 7.55615C66.9391 8.02028 66.7163 8.63878 66.6406 9.41369H70.8576C70.918 8.59277 70.7932 7.96201 70.4835 7.52139C70.1737 7.0818 69.6861 6.86098 69.0216 6.86098Z"
				fill={color()}
			/>
			<path
				d="M83.6707 15.5026C83.2148 15.8369 82.6638 16.0914 82.0177 16.2662C81.3716 16.4411 80.707 16.528 80.0231 16.528C79.1112 16.528 78.3394 16.3838 77.7096 16.0945C77.0789 15.8062 76.5657 15.3993 76.1711 14.8749C75.7754 14.3504 75.4902 13.7166 75.3164 12.9713C75.1416 12.2271 75.0547 11.4062 75.0547 10.5096C75.0547 8.57948 75.4882 7.09406 76.354 6.05233C77.2199 5.01161 78.4815 4.49023 80.1386 4.49023C80.9739 4.49023 81.6466 4.55873 82.1567 4.69572C82.6658 4.83271 83.1258 5.00752 83.5358 5.22017L82.8294 7.63691C82.4797 7.47027 82.1342 7.34044 81.7917 7.24945C81.4493 7.15847 81.0587 7.11246 80.6181 7.11246C79.7972 7.11246 79.1736 7.38235 78.7483 7.92214C78.323 8.46192 78.1104 9.32373 78.1104 10.5096C78.1104 10.9962 78.1635 11.444 78.2699 11.855C78.3762 12.2649 78.5357 12.6227 78.7483 12.9264C78.9609 13.231 79.238 13.4702 79.5805 13.644C79.9229 13.8188 80.3216 13.9057 80.7776 13.9057C81.2795 13.9057 81.7048 13.8413 82.0545 13.7115C82.4041 13.5827 82.7159 13.4263 82.9888 13.2443L83.6707 15.5026Z"
				fill={color()}
			/>
			<path
				d="M84.2812 4.81039H85.8546V2.66763L88.8183 1.82422V4.81039H91.6V7.31812H88.8183V11.6957C88.8183 12.4859 88.898 13.0523 89.0575 13.3937C89.217 13.7362 89.5165 13.9069 89.9582 13.9069C90.2618 13.9069 90.5245 13.8763 90.7443 13.8159C90.9641 13.7556 91.2115 13.6646 91.4855 13.542L92.0099 15.8217C91.6 16.019 91.1205 16.1867 90.5736 16.3237C90.0266 16.4607 89.4715 16.5292 88.9093 16.5292C87.8604 16.5292 87.0895 16.2593 86.5958 15.7195C86.102 15.1797 85.8546 14.2944 85.8546 13.0635V7.31812H84.2812V4.81039Z"
				fill={color()}
			/>
			<path
				d="M99.7142 7.59077C99.2429 7.42413 98.8176 7.3403 98.4373 7.3403C97.9047 7.3403 97.461 7.48138 97.1032 7.76252C96.7454 8.04366 96.5062 8.40453 96.3856 8.84515V16.2089H93.4219V4.80906H95.7241L96.0656 6.3139H96.1566C96.4152 5.75163 96.7638 5.31817 97.2055 5.01455C97.6461 4.71092 98.1634 4.55859 98.7553 4.55859C99.1499 4.55859 99.5987 4.64242 100.101 4.80906L99.7142 7.59077Z"
				fill={color()}
			/>
			<path
				d="M100.883 10.5096C100.883 8.57948 101.354 7.09406 102.297 6.05233C103.239 5.01161 104.561 4.49023 106.263 4.49023C107.175 4.49023 107.965 4.63438 108.634 4.92369C109.303 5.21301 109.858 5.61887 110.298 6.14331C110.739 6.66776 111.069 7.30261 111.29 8.04686C111.51 8.79212 111.62 9.61202 111.62 10.5086C111.62 12.4387 111.153 13.9252 110.219 14.9659C109.284 16.0066 107.965 16.528 106.263 16.528C105.351 16.528 104.561 16.3838 103.892 16.0945C103.224 15.8062 102.665 15.3993 102.217 14.8749C101.768 14.3504 101.434 13.7166 101.214 12.9713C100.993 12.2271 100.883 11.4072 100.883 10.5096ZM103.938 10.5096C103.938 11.0116 103.985 11.4747 104.075 11.9C104.166 12.3252 104.303 12.6984 104.485 13.0173C104.667 13.3363 104.908 13.5837 105.203 13.7585C105.5 13.9333 105.853 14.0202 106.263 14.0202C107.038 14.0202 107.616 13.7391 107.996 13.1768C108.375 12.6145 108.567 11.7251 108.567 10.5096C108.567 9.46072 108.392 8.61424 108.042 7.96814C107.692 7.32204 107.099 6.99899 106.264 6.99899C105.534 6.99899 104.965 7.27297 104.554 7.8199C104.143 8.36684 103.938 9.26341 103.938 10.5096Z"
				fill={color()}
			/>
			<path
				d="M120.648 16.208V9.73367C120.648 8.80644 120.515 8.13784 120.249 7.7279C119.984 7.31795 119.532 7.11246 118.893 7.11246C118.331 7.11246 117.855 7.27603 117.468 7.60215C117.08 7.92929 116.802 8.33515 116.636 8.82177V16.208H113.672V4.8092H116.02L116.363 6.31404H116.454C116.803 5.82742 117.266 5.40214 117.844 5.03717C118.422 4.67221 119.166 4.49023 120.078 4.49023C120.64 4.49023 121.141 4.56691 121.583 4.71821C122.023 4.87053 122.395 5.121 122.7 5.47063C123.004 5.82026 123.232 6.29564 123.384 6.89573C123.535 7.49685 123.612 8.23701 123.612 9.11824V16.208H120.648Z"
				fill={color()}
			/>
			<path
				d="M125.914 1.59583C125.914 1.15521 126.078 0.779002 126.404 0.467197C126.731 0.155391 127.183 0 127.76 0C128.338 0 128.805 0.156414 129.162 0.467197C129.519 0.779002 129.698 1.15521 129.698 1.59583C129.698 2.03645 129.519 2.4055 129.162 2.70197C128.805 2.99844 128.337 3.14668 127.76 3.14668C127.183 3.14668 126.731 2.99844 126.404 2.70197C126.078 2.4055 125.914 2.03645 125.914 1.59583ZM126.348 4.80998H129.311V16.2088H126.348V4.80998Z"
				fill={color()}
			/>
			<path
				d="M140.296 15.5026C139.84 15.8369 139.289 16.0914 138.643 16.2662C137.997 16.4411 137.332 16.528 136.648 16.528C135.736 16.528 134.964 16.3838 134.335 16.0945C133.704 15.8062 133.191 15.3993 132.796 14.8749C132.4 14.3504 132.115 13.7166 131.941 12.9713C131.767 12.2271 131.68 11.4062 131.68 10.5096C131.68 8.57948 132.113 7.09406 132.979 6.05233C133.845 5.01161 135.106 4.49023 136.764 4.49023C137.599 4.49023 138.272 4.55873 138.782 4.69572C139.291 4.83271 139.751 5.00752 140.161 5.22017L139.454 7.63691C139.105 7.47027 138.759 7.34044 138.417 7.24945C138.074 7.15847 137.684 7.11246 137.243 7.11246C136.422 7.11246 135.799 7.38235 135.373 7.92214C134.948 8.46192 134.735 9.32373 134.735 10.5096C134.735 10.9962 134.789 11.444 134.895 11.855C135.001 12.2649 135.161 12.6227 135.373 12.9264C135.586 13.231 135.863 13.4702 136.205 13.644C136.548 13.8188 136.947 13.9057 137.403 13.9057C137.905 13.9057 138.33 13.8413 138.679 13.7115C139.029 13.5827 139.341 13.4263 139.614 13.2443L140.296 15.5026Z"
				fill={color()}
			/>
			<path
				d="M51.6958 23.877H52.9226V31.0382C52.9226 31.6823 52.8377 32.2395 52.6701 32.7097C52.5014 33.18 52.2611 33.5664 51.9493 33.868C51.6375 34.1696 51.2613 34.3925 50.8217 34.5346C50.3821 34.6777 49.8965 34.7492 49.3649 34.7492C48.0973 34.7492 47.1414 34.463 46.4973 33.8905C45.8533 33.318 45.5312 32.449 45.5312 31.2836V23.877H46.804V30.6855C46.804 31.2274 46.8572 31.6854 46.9656 32.0575C47.0729 32.4306 47.2334 32.7322 47.4481 32.9622C47.6628 33.1923 47.9306 33.3589 48.2537 33.4611C48.5757 33.5634 48.9519 33.6145 49.3813 33.6145C50.2094 33.6145 50.8023 33.3875 51.1601 32.9326C51.5179 32.4777 51.6968 31.7283 51.6968 30.6866V23.877H51.6958Z"
				fill={color()}
			/>
			<path
				d="M57.4634 27.5867L56.6353 26.0379H56.574L56.7274 27.5867V34.61H55.5312V23.707H56.206L61.3431 30.8683L62.1405 32.3405H62.2172L62.0485 30.8683V23.8757H63.2446V34.7787H62.5699L57.4634 27.5867Z"
				fill={color()}
			/>
			<path
				d="M66.1406 23.877H67.4134V34.6112H66.1406V23.877Z"
				fill={color()}
			/>
			<path
				d="M73.1016 31.2529L73.4696 32.8784H73.485L73.8837 31.2223L76.4752 23.877H77.748L73.6843 34.7799H73.1169L68.9766 23.877H70.372L73.1016 31.2529Z"
				fill={color()}
			/>
			<path
				d="M79.0234 23.877H84.866V25.0117H80.2962V28.5234H84.4826V29.6581H80.2962V33.4765H84.9426V34.6112H79.0234V23.877Z"
				fill={color()}
			/>
			<path
				d="M87.2432 23.9839C87.6317 23.9124 88.0784 23.8561 88.5845 23.8152C89.0905 23.7744 89.5526 23.7539 89.9728 23.7539C90.443 23.7539 90.8898 23.805 91.3141 23.9073C91.7383 24.0095 92.1115 24.1782 92.4335 24.4133C92.7555 24.6484 93.0131 24.9551 93.2074 25.3334C93.4016 25.7116 93.4987 26.1717 93.4987 26.7135C93.4987 27.5518 93.2687 28.2316 92.8087 28.753C92.3486 29.2744 91.7659 29.622 91.0605 29.7958L91.7966 30.3632L94.4648 34.6109H92.9774L90.0178 29.9798L88.515 29.7498V34.6109H87.2422V23.9839H87.2432ZM90.0035 24.858C89.8706 24.858 89.7325 24.858 89.5894 24.858C89.4463 24.858 89.3083 24.8631 89.1754 24.8733C89.0425 24.8836 88.9167 24.8938 88.7992 24.904C88.6816 24.9142 88.5865 24.9296 88.516 24.95V28.9064H89.7121C90.4175 28.9064 91.0002 28.7326 91.4602 28.385C91.9203 28.0374 92.1503 27.4956 92.1503 26.7595C92.1503 26.2075 91.9612 25.7525 91.5829 25.3947C91.2036 25.0369 90.6772 24.858 90.0035 24.858Z"
				fill={color()}
			/>
			<path
				d="M101.21 31.8801C101.21 31.4508 101.083 31.1011 100.827 30.8302C100.572 30.5593 100.253 30.3191 99.8682 30.1095C99.4848 29.8999 99.0677 29.7026 98.6179 29.5196C98.1681 29.3356 97.752 29.1127 97.3686 28.852C96.9852 28.5913 96.6653 28.2693 96.4097 27.886C96.1541 27.5026 96.0263 27.0149 96.0263 26.421C96.0263 25.5827 96.3177 24.9182 96.9004 24.4275C97.4831 23.9368 98.3112 23.6914 99.3846 23.6914C100.008 23.6914 100.576 23.7374 101.087 23.8294C101.598 23.9214 101.997 24.039 102.283 24.1821L101.899 25.3169C101.664 25.2014 101.319 25.0899 100.865 24.9846C100.41 24.8793 99.8958 24.8262 99.3233 24.8262C98.6485 24.8262 98.1425 24.9775 97.8051 25.2791C97.4678 25.5806 97.2991 25.9364 97.2991 26.3443C97.2991 26.743 97.4269 27.0753 97.6825 27.3411C97.938 27.6069 98.257 27.8451 98.6414 28.0546C99.0248 28.2642 99.4408 28.4717 99.8907 28.6762C100.34 28.8807 100.757 29.1189 101.14 29.3888C101.523 29.6597 101.843 29.9848 102.099 30.363C102.354 30.7413 102.482 31.2115 102.482 31.7738C102.482 32.2338 102.4 32.6479 102.237 33.0159C102.073 33.3839 101.833 33.7009 101.516 33.9667C101.199 34.2325 100.816 34.4369 100.366 34.5801C99.9162 34.7232 99.4051 34.7947 98.8326 34.7947C98.0658 34.7947 97.432 34.7354 96.9311 34.6189C96.4301 34.5013 96.0416 34.3715 95.7656 34.2274L96.195 33.0926C96.4301 33.2224 96.7777 33.3492 97.2378 33.4729C97.6978 33.5976 98.2141 33.66 98.7866 33.66C99.1239 33.66 99.4408 33.6273 99.7373 33.5598C100.034 33.4933 100.289 33.386 100.504 33.2378C100.719 33.0895 100.889 32.9035 101.018 32.6775C101.147 32.4526 101.21 32.1868 101.21 31.8801Z"
				fill={color()}
			/>
			<path d="M104.797 23.877H106.07V34.6112H104.797V23.877Z" fill={color()} />
			<path
				d="M115.904 25.0117H112.561V34.6112H111.288V25.0117H107.945V23.877H115.904V25.0117Z"
				fill={color()}
			/>
			<path
				d="M119.659 30.3482L116.117 23.877H117.605L120.12 28.5694L120.385 29.5048H120.401L120.682 28.5387L123.094 23.877H124.444L120.932 30.3329V34.6112H119.659V30.3482Z"
				fill={color()}
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1.35431 0H33.873H34.2636H34.3055V0.0429371V0.43346V25.9974V26.115V26.119V26.1211V26.1467V26.1477L34.3045 26.2284V26.3889V26.4319H34.3004C34.2482 27.9766 33.7739 29.5673 32.9581 31.0916C32.1208 32.6537 30.9237 34.1473 29.4526 35.4487C27.9078 36.8145 26.0575 37.9717 24.0026 38.7773C22.1001 39.5236 20.0228 39.9683 17.8493 39.998L17.6132 40.001C15.4561 40.001 13.392 39.6125 11.4987 38.9286C9.47658 38.1987 7.64767 37.1334 6.10193 35.8474C4.5429 34.5501 3.27217 33.0268 2.37867 31.3952C1.5097 29.8086 0.999571 28.1177 0.930053 26.4319H0.921875V26.3889V26.0383V25.9994V0.432438V0.0429371V0H0.964812H1.35431ZM12.9606 35.2238H13.438V33.8692L13.4892 33.6361L13.3246 33.8385L13.0189 34.0481L12.8298 33.7905L13.6118 33.1597H13.8623V35.2248H14.3285V35.602H12.9596V35.2238H12.9606ZM15.452 35.0152C15.452 34.9355 15.4622 34.8639 15.4827 34.8005C15.5031 34.7371 15.5328 34.6799 15.5696 34.6288C15.6074 34.5777 15.6524 34.5306 15.7035 34.4897C15.7546 34.4488 15.8098 34.411 15.8701 34.3763C15.7577 34.3057 15.6697 34.2239 15.6064 34.1309C15.542 34.0379 15.5103 33.9234 15.5103 33.7864C15.5103 33.6974 15.5266 33.6136 15.5604 33.5359C15.5931 33.4582 15.6411 33.3908 15.7045 33.3335C15.7669 33.2763 15.8435 33.2313 15.9325 33.1996C16.0214 33.1679 16.1226 33.1515 16.2341 33.1515C16.3373 33.1515 16.4303 33.1648 16.5152 33.1924C16.6001 33.22 16.6726 33.2589 16.733 33.309C16.7933 33.3591 16.8403 33.4204 16.874 33.492C16.9067 33.5645 16.9241 33.6433 16.9241 33.7302C16.9241 33.8651 16.8935 33.9796 16.8331 34.0726C16.7728 34.1667 16.6839 34.2526 16.5673 34.3303C16.7043 34.41 16.8076 34.4989 16.8781 34.594C16.9476 34.6901 16.9824 34.8138 16.9824 34.9641C16.9824 35.0673 16.964 35.1604 16.9262 35.2432C16.8883 35.327 16.8352 35.3986 16.7667 35.4579C16.6982 35.5172 16.6154 35.5632 16.5193 35.5969C16.4232 35.6306 16.3179 35.647 16.2034 35.647C16.0889 35.647 15.9856 35.6317 15.8926 35.601C15.7996 35.5703 15.7209 35.5274 15.6554 35.4722C15.59 35.417 15.5399 35.3505 15.5041 35.2728C15.4694 35.1982 15.452 35.1103 15.452 35.0152ZM16.5571 34.9702C16.5571 34.9171 16.5448 34.87 16.5193 34.8261C16.4937 34.7831 16.462 34.7433 16.4211 34.7075C16.3813 34.6717 16.3363 34.639 16.2872 34.6094C16.2382 34.5797 16.1881 34.5511 16.138 34.5235C16.0306 34.5848 15.957 34.6523 15.9171 34.7239C15.8773 34.7954 15.8568 34.867 15.8568 34.9385C15.8568 35.0305 15.8885 35.1082 15.9509 35.1737C16.0143 35.2391 16.1012 35.2718 16.2136 35.2718C16.3169 35.2718 16.3997 35.2463 16.462 35.1962C16.5254 35.1461 16.5571 35.0704 16.5571 34.9702ZM15.9355 33.7935C15.9355 33.8487 15.9458 33.8968 15.9662 33.9377C15.9867 33.9786 16.0143 34.0144 16.05 34.0461C16.0858 34.0767 16.1257 34.1054 16.1697 34.1319C16.2146 34.1585 16.2606 34.183 16.3087 34.2055C16.4457 34.089 16.5142 33.9612 16.5142 33.8211C16.5142 33.725 16.4866 33.6525 16.4303 33.6034C16.3741 33.5543 16.3066 33.5298 16.2259 33.5298C16.1257 33.5298 16.0511 33.5564 16.0051 33.6085C15.9591 33.6606 15.9355 33.722 15.9355 33.7935ZM18.0088 34.3977C18.0088 33.9765 18.0804 33.6637 18.2245 33.4592C18.3687 33.2548 18.5752 33.1515 18.8451 33.1515C19.1333 33.1515 19.345 33.2527 19.4799 33.4552C19.6149 33.6576 19.6823 33.9714 19.6823 34.3967C19.6823 34.8199 19.6097 35.1338 19.4646 35.3403C19.3194 35.5458 19.1119 35.649 18.842 35.649C18.5557 35.649 18.3462 35.5407 18.2112 35.325C18.0763 35.1093 18.0088 34.7995 18.0088 34.3977ZM18.4545 34.3977C18.4545 34.6768 18.4852 34.8925 18.5455 35.0449C18.6058 35.1972 18.706 35.2728 18.8461 35.2728C18.981 35.2728 19.0802 35.2033 19.1425 35.0633C19.2059 34.9242 19.2366 34.7014 19.2366 34.3977C19.2366 34.1207 19.2069 33.907 19.1477 33.7557C19.0884 33.6044 18.9861 33.5288 18.842 33.5288C18.705 33.5288 18.6058 33.5993 18.5455 33.7414C18.4852 33.8835 18.4545 34.1023 18.4545 34.3977ZM22.3976 34.9324H22.0204V35.601H21.6053V34.9324H20.5656V34.6789L21.6533 33.1832H22.0204V34.5756H22.3976V34.9324ZM21.6043 34.0501L21.6349 33.7619H21.6216L21.5051 34.0093L21.1483 34.4724L20.9766 34.6032L21.1964 34.5756H21.6043V34.0501ZM12.5844 9.851C11.5723 9.28157 11.1389 10.1117 10.1442 10.3172C9.0421 10.5451 8.7487 9.68641 8.27945 8.91967C9.05539 9.08222 9.10037 9.44718 10.1125 8.75406C10.8557 8.24495 11.7972 8.57822 12.3472 9.2049L11.7349 7.55795C13.5607 7.54262 15.6176 7.30442 17.4189 7.55795L17.6469 7.59578C19.574 7.97608 21.0287 9.62609 21.0287 11.7147C21.0287 13.243 20.1546 14.9411 18.8747 15.8448V16.037C20.586 15.6444 22.5438 14.2112 22.7186 13.4066C22.4681 13.3085 21.867 12.9639 21.8742 12.922C21.2045 12.4415 20.9163 11.4836 21.0747 10.7578C21.2332 10.0319 21.5705 9.68129 22.0531 9.38891C22.3853 9.22023 22.6859 9.11902 23.0457 9.08222L32.0533 7.81149C32.0963 8.11613 32.1249 8.4259 32.1402 8.73463C32.4009 14.2439 28.144 18.924 22.6348 19.1847C20.7506 19.2736 18.3206 18.2309 17.4649 16.45C17.4199 16.4572 17.375 16.4654 17.33 16.4705C17.0028 16.5062 16.6982 16.5625 16.415 16.6361C16.1277 17.8342 18.5782 18.7645 21.4192 19.2215L20.9643 19.8809C21.502 19.7112 22.0735 19.6192 22.6675 19.6192C25.7906 19.6192 28.3229 22.1515 28.3229 25.2756C28.3229 28.3988 25.7896 30.9311 22.6675 30.9311C19.5443 30.9311 17.012 28.3988 17.012 25.2756C17.012 24.9546 17.0396 24.6398 17.0908 24.3341L17.284 24.3627L20.7077 24.5958C20.538 24.8739 20.4399 25.2 20.4399 25.5506C20.4399 26.5627 21.2608 27.3836 22.2729 27.3836C23.285 27.3836 24.1059 26.5627 24.1059 25.5506C24.1059 24.5549 23.3105 23.7442 22.3209 23.7187L22.3148 23.7013L22.0899 23.7279C22.0684 23.7299 22.0459 23.733 22.0234 23.735L19.074 24.0816C17.7859 24.2932 16.6716 24.3781 15.7198 24.3474L11.6398 29.9128L11.1297 28.5614C8.24572 28.3191 9.24349 29.6532 9.8896 30.1991C9.95298 30.2523 9.95298 30.4751 9.89369 30.5242C8.83457 30.4434 7.90836 29.5929 7.90836 28.4867C7.90836 27.3796 8.82741 26.4339 9.96116 26.4339C10.7177 26.4339 11.3781 26.8428 11.7338 27.4521L13.5863 21.6096H13.2929L12.1714 23.2208C11.511 22.5307 10.9947 21.6996 10.6758 20.7775L7.54543 16.9009C7.41253 17.2014 7.20909 17.4631 6.95761 17.6666L6.33297 16.0114C4.94876 15.943 4.09411 16.2773 4.81177 17.3292L5.11233 17.3323L5.07348 16.8129H5.94245L5.80546 18.6316L5.80648 18.6449H5.80444L5.80239 18.6776H5.20741L5.20536 18.556L5.1614 17.9712C4.36911 17.688 3.61976 17.0644 3.61976 16.0697C3.61976 15.304 4.13807 14.5311 4.87618 14.1938L4.47543 8.86549L3.50424 7.63463H5.14607C5.08473 6.95274 5.29533 6.21361 5.69607 5.61863C5.33213 5.67997 4.99681 5.87523 4.67172 6.41501C4.45703 5.24446 5.43845 3.73962 6.77666 3.96453C8.11997 4.19148 7.99525 3.80198 8.70167 3.27549C8.65158 3.71099 8.6434 4.14956 8.5473 4.52782C9.93049 4.6781 9.86813 4.17206 10.7575 3.50857C10.5981 4.88256 10.7453 6.27188 9.05948 6.66547C7.52294 7.02431 6.37489 6.12569 5.32191 7.6336H5.50899H7.5117L6.54357 8.8614L6.151 14.0731C6.48223 14.1519 6.78279 14.3113 7.02917 14.5301L9.5277 16.0299L10.0757 18.0591H10.3323C10.595 14.662 13.39 11.9743 16.8321 11.8803L16.6982 11.545L13.2387 11.5613L12.5844 9.851ZM12.429 9.30508C12.5384 9.44514 12.6273 9.59849 12.6918 9.75797C14.1659 10.0217 16.8996 11.7218 15.9867 9.30508H12.429ZM14.8335 4.38572H15.725V4.59938H16.0061V5.29149C15.8262 5.36612 15.6984 5.544 15.6984 5.7505C15.6984 5.9703 15.8415 6.15636 16.0388 6.22179L16.0419 6.22281L16.05 6.22588H16.0511L16.0562 6.2269L16.0613 6.22895L16.0644 6.22997L16.0725 6.23201L16.0756 6.23304L16.0787 6.23406L16.0817 6.23508H16.0828L16.0848 6.2361H16.0879L16.0909 6.23713L16.0961 6.23815H16.0971L16.1001 6.23917L16.1032 6.24019H16.1063H16.1073L16.1155 6.24121L16.1185 6.24224H16.1196L16.1237 6.24326H16.1247H16.1277H16.1308H16.1329H16.1349H16.138H16.141H16.1461H16.1502H16.1533H16.1564H16.1625H16.1656H16.1707H16.1717H16.184H16.1891H16.1901H16.1932H16.1962C16.4702 6.24326 16.6931 6.02142 16.6931 5.74744V5.73824V5.73517V5.72597L16.6921 5.71677C16.6921 5.71063 16.691 5.70552 16.691 5.69939L16.69 5.69223V5.69121L16.689 5.68303V5.68201C16.688 5.67179 16.6859 5.66054 16.6839 5.65032L16.6829 5.64623L16.6808 5.63703L16.6767 5.61965L16.6747 5.61147V5.61045L16.6716 5.60022L16.6706 5.59818L16.6696 5.59409C16.645 5.51844 16.6031 5.44994 16.5479 5.39474L16.5469 5.39372L16.5408 5.38758L16.5346 5.38145L16.5305 5.37736L16.5275 5.37532L16.5213 5.3702L16.5152 5.36509L16.5121 5.36305L16.5029 5.35589L16.5009 5.35487C16.4958 5.35078 16.4896 5.34669 16.4845 5.3426L16.4835 5.34158L16.4794 5.33954L16.4733 5.33545L16.4723 5.33442L16.4651 5.32931L16.4631 5.32829L16.461 5.33136C16.4549 5.32727 16.4488 5.3242 16.4426 5.32011C16.4355 5.31602 16.4283 5.31296 16.4211 5.30887L16.4191 5.30784L16.4109 5.30375H16.4099L16.4027 5.30069V5.17188C16.4027 4.76295 16.7626 4.22624 17.1705 4.21601L17.9291 4.19557L16.8454 7.03146L13.7458 7.04168L12.6642 4.20579L13.3849 4.21601C13.7938 4.22113 14.1526 4.76397 14.1526 5.17188V5.30171C14.0525 5.34874 13.9707 5.42745 13.9206 5.5256V5.52662L13.9165 5.53377L13.9155 5.53582L13.9103 5.54604L13.9093 5.54911L13.9052 5.55729L13.9022 5.56547L13.9011 5.56853L13.8971 5.57978L13.896 5.58182L13.893 5.59V5.59102C13.8868 5.61045 13.8817 5.62987 13.8766 5.65032C13.8735 5.66668 13.8705 5.68201 13.8695 5.69837V5.70041C13.8684 5.70757 13.8674 5.71472 13.8674 5.72188V5.72393V5.72597V5.73619V5.73926V5.74846C13.8674 6.02244 14.0893 6.24428 14.3632 6.24428H14.3663H14.3694H14.3704H14.3755H14.3878H14.3888H14.3939H14.397H14.4031H14.4062H14.4092H14.4133H14.4184H14.4215H14.4246H14.4256H14.4276H14.4307H14.4338H14.4368H14.4389H14.4409L14.444 6.24326H14.4471L14.4522 6.24224H14.4532H14.4563L14.4593 6.24121L14.4624 6.24019L14.4675 6.23917L14.4706 6.23815H14.4736L14.4767 6.23713L14.4951 6.23304L14.4982 6.23201C14.7078 6.17374 14.8611 5.98155 14.8611 5.75357C14.8611 5.54604 14.7343 5.36918 14.5534 5.29455V4.60245H14.8345V4.38572H14.8335ZM27.2771 21.4962C29.6683 20.526 31.8877 18.9056 32.3948 14.8685C31.9235 16.862 30.8879 17.9651 29.5896 18.5754C28.2013 19.2297 26.5124 19.3207 24.891 19.337C25.9859 19.8104 26.7261 20.4902 27.2771 21.4962ZM33.4406 0.864876H1.78777V25.5639H1.79084L1.78982 25.6069L1.78675 25.8839V25.9933V26.0362C1.78675 27.6607 2.2427 29.3046 3.06566 30.8513C3.90805 32.4359 5.13687 33.9213 6.65398 35.1839C8.12406 36.4076 9.86506 37.4207 11.7901 38.1149C13.5924 38.765 15.5573 39.1341 17.6132 39.1341H17.8391C19.9052 39.1055 21.8823 38.6822 23.6918 37.9717C25.6475 37.204 27.409 36.1019 28.8801 34.8005C30.3011 33.5441 31.4491 32.1057 32.2384 30.607C33.0122 29.1379 33.4396 27.6116 33.4396 26.1456C33.4396 26.0843 33.4406 26.069 33.4406 26.0608V26.0403V26.0393H33.4386V25.9964V25.9309L33.4334 25.6069L33.4324 25.5639H33.4375V0.864876H33.4406Z"
				fill={color()}
			/>
		</svg>
	)
}
