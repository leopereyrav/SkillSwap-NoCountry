import classNames from 'classnames';

export default function Card({ children, className }) {
  return (
    <div
      class={classNames(
        'p-6 bg-white border border-gray-200 rounded-lg shadow',
        className
      )}
    >
      {children}
    </div>
  );
}
