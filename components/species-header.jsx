import { truncate } from "../helpers";
import Timeago from "../components/timeago";
import MapIcon from "../icons/map";

export default function SpeciesHeader({name, date, distance}) {
	return (
		<header className="xs:flex xs:justify-between mb-4">
			<h3 className="font-bold xs:text-lg">{truncate(name, 32)}</h3>
			<div className="whitespace-nowrap space-x-2">
				<span className="bg-gray-300 text-gray-600 rounded-sm px-2 py-1 text-xs whitespace-nowrap">
					<Timeago datetime={date}/>
				</span>
				<span dateTime={date} className="bg-gray-300 text-gray-600 rounded-sm px-2 py-1 text-xs whitespace-nowrap">
					<MapIcon className="mr-1 mt-[-2px] text-[0.85em]"/>
					{distance} mi
				</span>
			</div>
		</header>
	)
}