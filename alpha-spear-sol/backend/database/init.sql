-- Create database
CREATE DATABASE IF NOT EXISTS alphaspear_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Use the database
USE alphaspear_db;

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(255),
    job_title VARCHAR(255),
    industry VARCHAR(100),
    project_type VARCHAR(100),
    budget VARCHAR(50),
    timeline VARCHAR(50),
    message TEXT NOT NULL,
    preferred_contact ENUM('email', 'phone') NOT NULL DEFAULT 'email',
    newsletter BOOLEAN NOT NULL DEFAULT FALSE,
    status ENUM('new', 'contacted', 'in_progress', 'completed', 'closed') NOT NULL DEFAULT 'new',
    source VARCHAR(100) DEFAULT 'website',
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
);

-- Create quotes table
CREATE TABLE IF NOT EXISTS quotes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(255) NOT NULL,
    project_type VARCHAR(100) NOT NULL,
    project_description TEXT NOT NULL,
    requirements TEXT,
    budget VARCHAR(50),
    timeline VARCHAR(50),
    additional_info TEXT,
    status ENUM('new', 'reviewing', 'quoted', 'accepted', 'rejected', 'completed') NOT NULL DEFAULT 'new',
    estimated_cost DECIMAL(10, 2),
    estimated_hours INT,
    quoted_at TIMESTAMP NULL,
    valid_until TIMESTAMP NULL,
    assigned_to VARCHAR(255),
    priority ENUM('low', 'medium', 'high', 'urgent') NOT NULL DEFAULT 'medium',
    source VARCHAR(100) DEFAULT 'website',
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_priority (priority),
    INDEX idx_created_at (created_at)
);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    status ENUM('subscribed', 'unsubscribed', 'bounced') NOT NULL DEFAULT 'subscribed',
    source VARCHAR(100) DEFAULT 'contact_form',
    subscribed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    unsubscribed_at TIMESTAMP NULL,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE INDEX idx_email (email),
    INDEX idx_status (status)
);

-- Insert sample data for testing
INSERT INTO contacts (first_name, last_name, email, phone, company, job_title, industry, project_type, budget, timeline, message, preferred_contact, newsletter, status) VALUES
('John', 'Doe', 'john.doe@example.com', '+1-555-0123', 'Tech Corp', 'CTO', 'Technology', 'Web Development', '$50,000 - $100,000', '3-6 months', 'We need a new company website with e-commerce capabilities.', 'email', true, 'new'),
('Jane', 'Smith', 'jane.smith@healthcare.com', '+1-555-0456', 'HealthCare Plus', 'IT Director', 'Healthcare', 'ERP/CRM System', '$100,000 - $250,000', '6-12 months', 'Looking for a comprehensive ERP system for our hospital network.', 'phone', false, 'contacted');

INSERT INTO quotes (first_name, last_name, email, phone, company, project_type, project_description, requirements, budget, timeline, priority, status) VALUES
('Michael', 'Johnson', 'michael@retailstore.com', '+1-555-0789', 'Retail Store Inc', 'E-commerce Platform', 'We need a complete e-commerce solution with inventory management, payment processing, and customer analytics.', 'Integration with existing POS system, mobile-responsive design, SEO optimization', '$75,000 - $150,000', '4-6 months', 'high', 'new'),
('Sarah', 'Wilson', 'sarah@fintech.com', '+1-555-0321', 'FinTech Solutions', 'Custom Software', 'Development of a trading platform with real-time data feeds and advanced analytics.', 'High-frequency trading support, regulatory compliance, multi-currency support', '$250,000 - $500,000', 'ASAP', 'urgent', 'reviewing');
