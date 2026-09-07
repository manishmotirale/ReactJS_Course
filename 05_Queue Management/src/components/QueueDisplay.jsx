import { FaPlay, FaCheckCircle, FaTrash } from "react-icons/fa";

function QueueDisplay({ queue, onUpdateStatus, onRemove }) {
  
  const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "var(--warning)";

      case "serving":
        return "var(--success)";

      case "completed":
        return "var(--info)";

      default:
        return "var(--text-primary)";
    }
  };
  return (
    <div className="queue-display">
      <h2>Current Queue</h2>
      {queue.length === 0 ? (
        <p className="empty-queue">No Customer Data</p>
      ) : (
        <div className="queue-list">
          {queue.map((customer) => (
            <div className="queue-list" key={customer.id}>
              <div className="customer-info">
                <h3>{customer.name}</h3>
                <p>{customer.service}</p>
                <span
                  className="status"
                  style={{
                    color: getStatusColor(customer.status),
                  }}
                >
                  {customer.status}
                </span>
              </div>

              <div className="actions">
                {customer.status === "waiting" && (
                  <button
                    className="serve-btn"
                    onClick={() => {
                      onUpdateStatus(customer.id, "serving");
                    }}
                  >
                    <FaPlay />
                    Serve
                  </button>
                )}
                {customer.status === "serving" && (
                  <button
                    className="complete-btn"
                    onClick={() => {
                      onUpdateStatus(customer.id, "completed");
                    }}
                  >
                    <FaCheckCircle />
                    Completed
                  </button>
                )}
                <button
                  className="remove-btn"
                  onClick={() => {
                    onRemove(customer.id);
                  }}
                >
                  <FaTrash />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QueueDisplay;
