import { ChangeEvent, KeyboardEvent } from 'react';

interface SearchBarProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    placeholder?: string;
}

const SearchBar = ({ value, onChange, onSearch, placeholder }: SearchBarProps) => {
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    };

    return (
        <div className="flex gap-2">
            <input
                type="text"
                value={value}
                onChange={onChange}
                onKeyPress={handleKeyPress}
                placeholder={placeholder}
                className="flex-1 p-2 border rounded"
            />
            <button
                onClick={onSearch}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar; 