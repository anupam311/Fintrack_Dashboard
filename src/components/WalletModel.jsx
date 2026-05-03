function WalletModel({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="glass-card p-6 rounded-xl w-[90%] max-w-md space-y-4">
        <h2 className="text-xl font-bold">
          Connect Wallet
        </h2>

        <p className="text-secondary text-sm">
          This is a demo feature. In a real application, this would connect to a
          crypto wallet like MetaMask.
        </p>

        <button className="primary-btn w-full">
          Connect MetaMask
        </button>

        <button
          onClick={onClose}
          className="secondary-btn w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default WalletModel;