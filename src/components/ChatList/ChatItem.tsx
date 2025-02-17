import React from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { ICharacter } from '@/utils/types';
import defaultAvatar from '@/assets/images/default.png';

interface ChatItemProps {
    character: ICharacter,
    isSelected: boolean,
    id: string,
}

export default function ChatItem (props: ChatItemProps): React.JSX.Element {
    const navigate = useNavigate()

    function chat() {
        const params = { id: props.id };
        navigate({ pathname: '/chat', search: `?${createSearchParams(params)}` });
    }

    return (
        <div className={`w-full h-[64px] flex items-center gap-2 p-2 rounded-[1rem] cursor-pointer ${props.isSelected ? 'bg-[#5974ff]' : 'bg-[#171717]'}`}
            onClick={() => chat()}
        >
            <img className='w-[48px] h-[48px] rounded-full'
                src={!props.character.avatar_img || props.character.avatar_img == "" ? defaultAvatar : props.character.avatar_img } alt='' 
            />
            <div className='flex h-full flex-grow flex-col justify-between overflow-x-hidden'>
                <span className='text-[#fff] text-[1.2rem] text-left capitalize'>
                    { props.character.name }
                </span>
                {/* last message & last time */}
                <p className='text-[#b8bccf] text-[13px] text-left capitalize bg-transparent whitespace-nowrap overflow-hidden text-ellipsis'>
                    { props.character.bio }
                </p>
            </div>
            
        </div>
    );
}